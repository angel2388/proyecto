from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import DateTime
import datetime
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(20), unique=False)
    apellido = db.Column(db.String(20), unique=False)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(80), unique=False)
    imagen = db.Column(db.String(200), unique=False)
    nickname = db.Column(db.String(20), unique=False)
    is_active = db.Column(db.Boolean(), unique=False)
    creacion_fecha = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre":self.nombre,
            "apellido":self.apellido,
            "nickname":self.nickname,
            "creacion":self.creacion_fecha.isoformat(),
            
            # do not serialize the password, its a security breach
        }

class Genero(db.Model):
    __tablename__ = 'genero'#
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre":self.nombre,
            # do not serialize the password, its a security breach
        }

class Edad(db.Model):
    __tablename__ = 'edad'#
    id = db.Column(db.Integer, primary_key=True)
    valor = db.Column(db.String(30), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "valor":self.valor,
            # do not serialize the password, its a security breach
        }
class Post(db.Model):
    __tablename__ = 'post'#
    id = db.Column(db.Integer, primary_key=True)
    
    nombre = db.Column(db.String(80), unique=False, nullable=False)
    imagen = db.Column(db.String(200), unique=False, nullable=False)
    horas_jugables= db.Column(db.String(150), unique=False, nullable=False)
    sinopsis = db.Column(db.String(400), unique=False, nullable=False)
    opinion =db.Column(db.String(400), unique=False, nullable=False)
    creacion_fecha = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    privado = db.Column(db.Boolean(), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    genero_id = db.Column(db.Integer, db.ForeignKey('genero.id'))
    edad_id = db.Column(db.Integer, db.ForeignKey('edad.id'))
    
    user = db.relationship(User)
    genero = db.relationship(Genero)
    edad = db.relationship(Edad)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):

        return {
            "id": self.id,
            "nombre":self.nombre,
            "imagen": self.imagen,
            "horas_jugables":self.horas_jugables,
            "sinopsis": self.sinopsis,
            "opinion":self.opinion,
            "creacion":self.creacion_fecha.isoformat(),
            "privado":self.privado,
            #"user_id":self.user_id,
            "user":self.user.nickname,
            #"genero_id":self.genero_id,
            "genero":self.genero.nombre,
            #"edad_id":self.edad_id,
            "edad":self.edad.valor,
            # do not serialize the password, its a security breach
        }



class Tema(db.Model):    
    __tablename__ = 'tema'#
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), unique=False, nullable=False)
    #creacion_fecha = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            # do not serialize the password, its a security breach
        }



class Comentario(db.Model):
    __tablename__ = 'comentario'#
    id = db.Column(db.Integer, primary_key=True)
    texto = db.Column(db.String(400), unique=False, nullable=False)
    creacion_fecha = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))
    tema_id = db.Column(db.Integer, db.ForeignKey('tema.id'))
    comentario_id = db.Column(db.Integer, db.ForeignKey('comentario.id'))
    user = db.relationship(User)
    post = db.relationship(Post)
    tema = db.relationship(Tema)
    #comentario = db.relationship(Comentario)
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "texto":self.texto,
            "creacion":self.creacion_fecha.isoformat(),
            "user":self.user.nickname,
            "post_id":self.post_id,
            "tema_id":self.tema_id,
            
            # do not serialize the password, its a security breach
        }

class Like(db.Model):
    __tablename__ = 'like'#
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))
    comentario_id = db.Column(db.Integer, db.ForeignKey('comentario.id'))
    user = db.relationship(User)
    post = db.relationship(Post)
    comentario = db.relationship(Comentario)
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id":self.user_id,
            "post_id":self.post_id,
            "comentario_id":self.comentario_id,
            # do not serialize the password, its a security breach
        }

