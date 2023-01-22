"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Genero, Edad, Post, Tema, Comentario, Like
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

from flask_bcrypt import Bcrypt

app = Flask(__name__)
bcrypt = Bcrypt(app)

import cloudinary
import cloudinary.uploader
import cloudinary.api

cloudinary.config( 
  cloud_name = "dopyhhbvo", 
  api_key = "414362336319691", 
  api_secret = "lTeC7ZPgPNZ30mxqsBw_3IreEyE" 
)

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#endpoint para subir imagenes
@api.route('/upload', methods=['POST'])
def upload_image():
    archivo = request.files['archivo']
    if archivo:
        data = cloudinary.uploader.upload(archivo)
        url_image = data["secure_url"]
        print(url_image)
        return jsonify(data), 201

    return jsonify({"msg":"Error"})


#proceso de signup login y autenticación de los usuarios
@api.route('/signup', methods=['POST'])
def signup():
    body = request.get_json()

    email = body.get('email')
    password1 = body.get('password1')
    password2 = body.get('password2')

    # validar q' email & password != NONE
    if email is None or password1 is None:
        return jsonify({"msg": "Email o password incorrectos", "data":None}), 400
    
    if len(password1) < 4:
        return jsonify({"msg": "Tamaño del password incorrecto", "data":None}), 400
    
    if password1 != password2:
        return jsonify({"msg": "Los password no coinciden", "data":None}), 400
    
    hash = bcrypt.generate_password_hash(password1)
    print(hash)

    user = User(
        email = email,
        password = hash.decode('utf-8'),
        is_active = True,
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({"msg": None, "data": user.serialize()}), 201

@api.route('/login', methods=['POST'])
def login():
    body = request.get_json()

    email = body.get('email')
    password = body.get('password')
    # validar q' email & password != NONE

    users = User.query.filter_by(email=email).all()
    if (len(users)==0):
        return jsonify({"msg":"El usuario con email:" + email + " no existe.","data": None})
    
    user = users[0]
    hash = user.password
    isValid = bcrypt.check_password_hash(hash, password)
    if not isValid:
        return jsonify({"msg":"Clave incorrecta.","data":None}), 201

    token = create_access_token(identity={"rol": "usuario", "data": user.serialize()})
    return jsonify({"msg": None,"data":token})

@api.route('/private', methods=['GET'])
@jwt_required()
def private():
    data = get_jwt_identity()
    print(data)
    return jsonify(data)

#llamar todos los usuarios
@api.route('/user', methods=['GET'])
def get_user():
    users = User.query.all()
    result=[]
    for user in users:
        result.append(user.serialize())
    return jsonify(result)

@api.route('/user/<id>', methods=['PUT'])
def modify_user(id):
    user = User.query.get(id)
    body = request.get_json()

    if user is None:
        return "no existe el usuario requerido con id"+str(id)
    
    nombre = body.get('nombre')#tambien vale --> nombre =  body["nombre"]
    apellido = body.get('apellido')
    #email = body.get('email')
    nickname = body.get('nickname')
    imagen = body.get('imagen')

    if nombre is not None:
        user.nombre = nombre
    if apellido is not None:
        user.apellido = apellido
    #if email is not None:
        #user.email = email
    if nickname is not None:
        user.nickname = nickname
    if imagen is not None:
        user.imagen = imagen

    db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize())

@api.route('/user/<id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    if user is None:
        return jsonify({"msg":"No existe este usuario","data":None})
    db.session.delete(user)
    db.session.commit()
    return jsonify({"msg":"Usuario borrado","data":None})

@api.route('/genero', methods=['POST'])
def genero():
    body = request.get_json()
    nombre = body.get('nombre')

    genero = Genero(
        nombre = nombre,
    )

    db.session.add(genero)
    db.session.commit()
    return jsonify({"msg":"Genero creado" ,"data":None})

@api.route('/get_genero', methods=['GET'])
def get_genero():
    
    generos = Genero.query.all()
    result=[]
    for genero in generos:
        result.append(genero.serialize())
    return jsonify({"msg":None ,"data":result})

@api.route('/edad', methods=['POST'])
def edad():
    body = request.get_json()
    valor = body.get('valor')

    edad = Edad(
        valor = valor,
    )

    db.session.add(edad)
    db.session.commit()
    return jsonify({"msg":"edad añadida" ,"data":None})

@api.route('/edad', methods=['GET'])
def get_edad():
    edades = Edad.query.all()
    result=[]
    for edad in edades:
        result.append(edad.serialize())
    return jsonify({"msg":None ,"data":result})

@api.route('/postup', methods=['POST'])
def postup():
    body = request.get_json()

    nombre = body.get('nombre')
    imagen = body.get('imagen')
    horas_jugables = body.get('horas_jugables')
    sinopsis = body.get('sinopsis')
    opinion = body.get('opinion')
    privado = body.get('privado')
    user_id = body.get('user_id')
    genero_id = body.get('genero_id')
    edad_id = body.get('edad_id') 

    

    # validar q' email & password != NONE
    if nombre is None or imagen is None or horas_jugables is None or sinopsis is None or opinion is None:
        return jsonify({"msg": "Texto vacio", "data":None}), 400

    post = Post(
        nombre = nombre,
        imagen = imagen,
        horas_jugables = horas_jugables,
        sinopsis = sinopsis,
        opinion = opinion,
        privado = privado,
        user_id = user_id,
        genero_id = genero_id,
        edad_id = edad_id,
    )

    db.session.add(post)
    db.session.commit()

    return jsonify({"msg": None, "data": post.serialize()}), 201

@api.route('/comentario', methods=['POST'])
def comentario():
    body = request.get_json()

    texto = body.get('texto')
    user_id = body.get('user_id')
    post_id = body.get('post_id')
    tema_id = body.get('tema_id')

    comentario= Comentario(
        texto = texto,
        user_id = user_id,
        post_id = post_id,
        tema_id = tema_id,
    )

    db.session.add(comentario)
    db.session.commit()
    return jsonify({"msg":"comentario añadido" ,"data":None}), 201

@api.route('/like', methods=['POST'])
def like():
    body = request.get_json()
    user_id = body.get('user_id')
    post_id = body.get('post_id')
    comentario_id = body.get('comentario_id')

    like = Like(
        user_id = user_id,
        post_id=post_id,
        comentario_id = comentario_id,
    )

    db.session.add(like)
    db.session.commit()
    return jsonify({"msg":"like añadida" ,"data":None})

@api.route('/like/<int:user_id>', methods=['GET'])
def get_like(user_id):
    likes = Like.query.all()
    result=[]
    for like in likes:
        if like.user_id==user_id:
            result.append(like.serialize())
    return jsonify(result)

@api.route('/posts', methods=['GET'])
def get_posts():
    posts = Post.query.all()
    result=[]
    for post in posts:
        #genero = Genero.query.get(id)
        result.append(post.serialize())
    return jsonify({"msg":None ,"data":result})

@api.route('/post/<id>', methods=['GET'])
def get_post(id):
    post = Post.query.get(id)
    result=[]
    result.append(post.serialize())
    return jsonify({"msg":None ,"data":result})

@api.route('/comentario/<int:user_id>', methods=['GET'])
def get_comentario(user_id):
    comentarios = Comentario.query.all()
    result=[]
    for comentario in comentarios:
        if comentario.user_id==user_id:
            result.append(comentario.serialize())
    return jsonify({"msg":None ,"data":result})

