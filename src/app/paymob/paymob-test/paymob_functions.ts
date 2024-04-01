const API = 'ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnVZVzFsSWpvaWFXNXBkR2xoYkNJc0luQnliMlpwYkdWZmNHc2lPams1TnpJd0xDSmpiR0Z6Y3lJNklrMWxjbU5vWVc1MEluMC5laHpPVzNzTFYwWW13M24yQmJpRm1RTk0wTXlzXzZzSDVGM3hHR19idm1kcVlrWTZGQjBQWUcxbFBvcFRZTFY5emhtblZlZlZiU1BiUlJkX2UzekJUZw=='; // قم بإدخال API الخاص بك هنا
const integrationID = 1698298;//1698298

export async function firstStep() {
    let data = {
        "api_key": API
    }

    let request = await fetch('https://accept.paymob.com/api/auth/tokens', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })

    let response = await request.json()

    let token = response.token
     console.log("firsttoken")
     console.log(token)

    secondStep(token)
}

export async function secondStep(token: string) {
    let data = {
        "auth_token": token,
        "delivery_needed": "false",
        "amount_cents": "100",
        "currency": "EGP",
        "items": [],
    }

    let request = await fetch('https://accept.paymob.com/api/ecommerce/orders', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })

    let response = await request.json()

    let id = response.id
    console.log("token and id")
    console.log(id)
    console.log(token)

    thirdStep(token, id)
}

export async function thirdStep(token: string, id: number) {
    let data = {
        "auth_token": token,
        "amount_cents": "125000",
        "expiration": 3600,
        "order_id": id,
        "billing_data": {
            "apartment": "803",
            "email": "claudette09@exa.com",
            "floor": "42",
            "first_name": "Clifford",
            "street": "Ethan Land",
            "building": "8028",
            "phone_number": "+86(8)9135210487",
            "shipping_method": "PKG",
            "postal_code": "01898",
            "city": "Jaskolskiburgh",
            "country": "CR",
            "last_name": "Nicolas",
            "state": "Utah"
        },
        "currency": "EGP",
        "integration_id": integrationID
    }

    let request = await fetch('https://accept.paymob.com/api/acceptance/payment_keys', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })

    let response = await request.json()

    let TheToken = response.token
    console.log("thetoken")
    console.log(TheToken)

    cardPayment(TheToken)
}

export async function cardPayment(token: string) {
    let iframURL = `https://accept.paymob.com/api/acceptance/iframes/232735?payment_token=${token}`

    location.href = iframURL
}
