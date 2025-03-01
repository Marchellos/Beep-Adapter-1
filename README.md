# Railway Deployment Handleiding

## Stap 1: Maak een nieuw project
- Ga naar [https://railway.app](https://railway.app)
- Klik op 'New Project' en kies 'Create Empty Project'

## Stap 2: Upload bestanden
- Upload `index.js` en `package.json` direct in Railway
- Of maak een GitHub repository en koppel die aan Railway

## Stap 3: Deployen
- Railway herkent automatisch dat dit een Node.js project is
- Klik op 'Deploy'

## Stap 4: Test je endpoint
- Railway geeft je een URL, bijvoorbeeld:
    https://jouw-projectnaam.up.railway.app
- Test direct met:
    ```sh
    curl -X POST https://jouw-projectnaam.up.railway.app/beep-data-forwarder \
         -H "Content-Type: application/json" \
         -d '{"name": "Developer"}'
    ```