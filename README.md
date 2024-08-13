# Questions
## Général
- Gmail ne supporte pas les svg, il faudra mettre le logo en png (pour le moment il est hebergé sur imgbb mais juste pour une semaine)

## cart_validation.html

- Il y a deux disclaimers différents, complémentaires, dans le fichier Flux 1 et dans le mail préparé par Anthony : quelle est la bonne version ? (en attendant, j'ai laissé les deux vu qu'ils ne se contredisaient pas mais ça commence à faire un très long paragraphe)

## order_validation.html

- Le disclaimer n'était pas bon non plus. (Valentine)

# Variables manquantes : 
## cart_validation_dark.html
- Images en blanc pour le dark mode : j'ai les assets mais pas de solution pour les limiter au dark mode.

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
- {{cart_number}}

# forgot_password.html
- {{ reset_password_link }}

afficher la source html
@RenderBody()

**Valentine** : Disclaimers.

Il y a un sujet sur la taille des fonts, attention. Tout est en small.
