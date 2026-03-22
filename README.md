### To run this project locally

`npm run dev`


### Deployment Hook  
Use this in the command line to inititate the deployment of the latest pushed code on `main` branch

`curl https://api.vercel.com/v1/integrations/deploy/prj_EvucdaZHvwTBusDsEyIsNOBmmpPu/aRAkPLRMpL`

^ how does this work. need to check.


### Generate JWT Token\

`jwt encode --secret "your-secure-secret-here" '{"id":"1","email":"admin@theagischool.com","role":"admin"}'`

### Verify Token

`jwt decode --secret "your-secure-secret-here" <your-token>`

### Admin User Management

Create a new admin user by running:

```bash
node scripts/create-user.js admin@theagischool.com your_secure_password
```

This will:
- Create a new admin user if the email doesn't exist
- Hash the password securely
- Store the credentials in the database

- Deployment
