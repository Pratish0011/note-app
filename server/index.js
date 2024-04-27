import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()
const app = express();

app.use(cors())


app.get('/', (req, res) => {
    const data = [
        {
          title: ["Gracathon"],
          content: [
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi temporibus sapiente quod, est molestias vitae cum commodi eius nulla debitis. Ipsa, consequuntur? ",
          ],
        },
        {
          title: ["Gracathon 2.0"],
          content: [
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi temporibus sapiente quod, est molestias vitae cum commodi eius nulla debitis. Ipsa, consequuntur? ",
          ],
        },
        {
          title: ["Gracathon 2.0"],
          content: [
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi temporibus sapiente quod, est molestias vitae cum commodi eius nulla debitis. Ipsa, consequuntur? ",
          ],
        },
        {
          title: ["Gracathon"],
          content: [
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi temporibus sapiente quod, est molestias vitae cum commodi eius nulla debitis. Ipsa, consequuntur? ",
          ],
        },
        {
          title: ["Gracathon 2.0"],
          content: [
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi temporibus sapiente quod, est molestias vitae cum commodi eius nulla debitis. Ipsa, consequuntur? ",
          ],
        },
        {
          title: ["Gracathon 2.0"],
          content: [
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi temporibus sapiente quod, est molestias vitae cum commodi eius nulla debitis. Ipsa, consequuntur? ",
          ],
        },
      ];
      return res.json(data)
  })
  
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })