'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Saulo Filho',
      email: 's@s.com',
      password: '12345678'
    })

    await user.teams().create({
      name: 'Sx',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
