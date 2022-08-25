![cards banner](docs/banner.png)

---
<div align="center">

### cards
An open-source clone of Duolingo's Tinycards ⚰️

<br>

![version](https://img.shields.io/github/v/tag/devicarus/cards?color=%233ccfff&label=version&style=for-the-badge)
<br>
</div>

---

## Features

- User accounts
- Confirmation emails
- Deck creation

## How to use
> :warning: Requires `Docker` and `docker-compose`

#### Clone the repository
```bash
git clone https://github.com/devicarus/cards.git && cd cards
```

#### Create a configuration
```bash
mv frontend/.env.example frontend/.env && vi frontend/.env
```

#### Run the containers
```bash
docker-compose up
```

> :rocket: Running on `localhost:80`