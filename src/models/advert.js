import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/edu')

const advertSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  start_time: { type: Date, required: true },
  end_time: { type: Date, required: true },
  create_time: { type: Date, default: Date.now },
  last_modified: { type: Date, default: Date.now }
})


const Advert = mongoose.model('Advert', advertSchema)
export default Advert


// pageSize 3
// 1 0 3
// 2 3 3
// 3 6 3
// n (n-1) * 3 3
// Advert
//   .find()
//   .skip(3)
//   .limit(3)
//   .exec((err, result) => {
//     if (err) {
//       throw err
//     }
//     console.log(result)
//   })
