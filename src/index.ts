import { Hono } from 'hono'

const app = new Hono()

const welcomeStrings = [
  "Hello Hono!",
  "To learn more about Hono on Vercel, visit https://vercel.com/docs/frameworks/backend/hono",
]

app.get('/', (c) => {
  return c.text(welcomeStrings.join('\n\n'))
})

app.get('/users/:id', (c) => {
  return c.text(`User ${c.req.param('id')}`)
})

const admin = new Hono()
admin.get('/', (c) => {
  return c.text('Admin')
})
admin.get('/auth', (c) => {
  return c.text('Admin Auth')
})
app.route('/admin', admin)
console.log(app.routes)


export default app
