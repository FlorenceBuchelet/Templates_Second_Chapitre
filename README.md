# Questions
## cart_validation.html

- Il y a deux disclaimers différents, complémentaires, dans le fichier Flux 1 et dans le mail préparé par Anthony (hello Anthony!) : quelle est la bonne version ? (en attendant, j'ai laissé les deux vu qu'ils ne se contredisaient pas mais ça commence à faire un très long paragraphe)

## order_validation.html

- Le disclaimer n'était pas bon non plus.

## Pages webs
- Ok j'ai les pages en ligne mais je n'ai pas le code en lui-même, est-ce que ce serait possible d'avoir les fichiers html si ils existent ? Il y a vraiment beaucoup de déjà fait, ce serait bête de reprendre à zéro. Après si ça n'est pas possible je repars effectivement de zéro.
- CGUA : Il y a un logo de menu en haut à droite, est-ce que cette navbar est fixe ou est-ce que je dois aussi l'intégrer à ce que je code ?
- Est-ce que pour les pages webs je peux tabler sur un vrai HTML/CSS moderne ou est-ce que j'ai les mêmes limitations que pour les templates d'emails ?

# Variables manquantes : 
## cart_validation_dark.html
- Images en blanc (ex. https://www.images-chapitre.com/babel/images/ba.png)

## cart_validation.html & cart_validation_dark.html
- {{store.name}}
- {{store.street}}
- {{store.zipcode}}
- {{store.city}}
- {{cart_number}} (x3)
- boucle {% for book in books %} ... {% endfor %} 
- {{book.title}}
- {{book.price}}
- {{total_price}} total du cart
- {{end_validity_date}} fin de validité de la reprise

# Email_verify.html
- {{ verification_link }} lien vers la confirmation d'email

# order_validation.html
- {{order_number}}
- {{store.name}}
- {{voucher.expired_at}}
- {{voucher.code}}
- {{voucher.amount}} 

# forgot_password.html
- {{ reset_password_link }}
