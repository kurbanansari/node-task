/**
 * @swagger
 * /records:
 *   get:
 *     tags:
 *       - Records
 *     name: Get all records
 *     summary: get all records
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: All records
 */

/**
 * @swagger
 * /managed-records:
 *   get:
 *     tags:
 *       - Records
 *     name: Get managed records
 *     summary: get managed records
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Managed records
 */