# Questions
## cart_validation.html

- Il y a deux disclaimers différents, complémentaires, dans le fichier Flux 1 et dans le mail préparé par Anthony : quelle est la bonne version ? (en attendant, j'ai laissé les deux vu qu'ils ne se contredisaient pas)

## cart_validation_dark.html

- Images en blanc (ex. https://www.images-chapitre.com/babel/images/ba.png)

## order_validation.html

- Le disclaimer n'était pas bon non plus.


# Variales manquantes : 
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

```html

                        <td
                            style="padding: 15px; padding-bottom: 15px; font-size: 17px; vertical-align: top; font-family: 'Barlow Condensed', 'Arial', sans-serif;">
                            <span
                                style="font-size: 20px; font-weight: bold; color: #000;line-height: 40px;">N°
                                de reprise : </span> {{order_number}}
                            <br>
                            <span
                                style="font-size: 20px;font-weight: bold;color: #000;line-height: 40px;">Valable
                                à : </span> {{store.name}}
                            <br>
                            <span
                                style="font-size: 20px; font-weight: bold; color: #000;line-height: 40px;">Jusqu'au
                                : </span> {{voucher.expired_at}}
                            <br>
                            <span
                                style="font-size: 20px; font-weight: bold; color: #000;line-height: 40px;">Code
                                : </span> {{voucher.code}}
                        </td>
                        <td style="vertical-align:middle;background-color: #379489;"
                            width="355" align="center">
                            <table border="0" cellpadding="0" cellspacing="0"
                                role="presentation">
                                <tbody>
                                    <tr>
                                        <td width="248" height="174" align="center"
                                            style="width: 248px; height: 108px; vertical-align: middle; text-align: center">
                                            <h3 style="
                                font-family: 'Barlow Condensed', 'Arial', sans-serif;
                                font-size: 24px;
                                font-weight: 700;
                                color: white;
                                text-align: center;
                                border:0;
                                margin: auto;
                                line-height: 26px;
                                max-width: 80%
                                ">
                                                {{voucher.amount}} €

                                            </h3>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
</table>
```
