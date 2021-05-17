const { Pool } = require('pg')

const pool = new Pool({
	host: 'localhost',
	user: 'muhammad',
	password: 'math',
	database: 'pro',
	port: 5432,
})

const row = async (SQL, ...params) => {
	const client = await pool.connect()
	try {
		const { rows: [row] } = await client.query(SQL, params)
		return row
	}
	finally {
		client.release()
	}
}

const rows = async (SQL, ...params) => {
	const client = await pool.connect()
	try {
		const { rows } = await client.query(SQL, params)
		return rows
	}
	finally {
		client.release()
	}
}

module.exports.row = row
module.exports.rows = rows
