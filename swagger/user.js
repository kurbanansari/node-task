// /**
//  * @swagger
//  * /users:
//  *   get:
//  *     tags:
//  *       - User
//  *     name: Get all users
//  *     summary: get all users
//  *     consumes:
//  *       - application/json
//  *     produces:
//  *       - application/json
//  *     responses:
//  *       200:
//  *         description: users list
//  */

// /**
//  * @swagger
//  * /user/{id}:
//  *   get:
//  *     tags:
//  *       - User
//  *     name: Get user details
//  *     summary: get user details
//  *     consumes:
//  *       - application/json
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *            type: string
//  *         required: true
//  *     produces:
//  *       - application/json
//  *     responses:
//  *       200:
//  *         description: success
//  */


// /**
//  * @swagger
//  * /user:
//  *   post:
//  *     tags:
//  *       - User
//  *     name: Add user
//  *     summary: add user
//  *     consumes:
//  *       - application/json
//  *     parameters:
//  *       - name: body
//  *         in: body
//  *         schema:
//  *           type: object
//  *           properties:
//  *             username:
//  *               type: string
//  *             password:
//  *               type: string
//  *         required:
//  *           - username
//  *           - password
//  *     produces:
//  *       - application/json
//  *     responses:
//  *       200:
//  *         description: user added successfully
//  */

// /**
//  * @swagger
//  * /user:
//  *   put:
//  *     tags:
//  *       - User
//  *     name: Update user
//  *     summary: update user
//  *     consumes:
//  *       - application/json
//  *     parameters:
//  *       - name: body
//  *         in: body
//  *         schema:
//  *           type: object
//  *           properties:
//  *             id:
//  *               type: string
//  *             username:
//  *               type: string
//  *             password:
//  *               type: string
//  *     produces:
//  *       - application/json
//  *     responses:
//  *       200:
//  *         description: user updated successfully
//  */

// /**
//  * @swagger
//  * /auth:
//  *   post:
//  *     tags:
//  *       - User
//  *     name: Authenticate user
//  *     summary: authenticate user
//  *     consumes:
//  *       - application/json
//  *     parameters:
//  *       - name: body
//  *         in: body
//  *         schema:
//  *           type: object
//  *           properties:
//  *             username:
//  *               type: string
//  *             password:
//  *               type: string
//  *         required:
//  *           - username
//  *           - password
//  *     produces:
//  *       - application/json
//  *     responses:
//  *       200:
//  *         description: authenticated successfully
//  */


// /**
//  * @swagger
//  * /user/{id}:
//  *   delete:
//  *     tags:
//  *       - User
//  *     name: Get user details
//  *     summary: protected route example
//  *     security:
//  *       - bearerAuth: []
//  *     consumes:
//  *       - application/json
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *            type: string
//  *         required: true
//  *     produces:
//  *       - application/json
//  *     responses:
//  *       200:
//  *         description: success
//  */