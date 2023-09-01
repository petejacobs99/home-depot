const Item = require('../../models/item')
const SubItem = require('../../models/subItem')

exports.index = async (req, res) => {
  try{
    const data = await Item.find({}).sort('name').populate('category subItem').exec()
    res.status(200).json({items: data})
  }catch(error){
    res.status(400).json({message: error.message})
  }
}
exports.showByCategory = async (req, res) => {
  try{
    const data = await Item.find({category: req.params.id}).populate('category subItem').exec()
    res.status(200).json(data)
  } catch(error){
    res.status(400).json({ message: error.message})
  }
}
exports.show = async (req, res) => {
  try{
    const item = await Item.findById(req.params.id).populate('category subItem').exec()
    res.status(200).json(item);
  }catch(error){
    res.status(400).json({message: error.message})
  } 
}
exports.search = async (req, res) => {
    try{
        const items = await Item.find({searchTerm: req.params.term})
        res.status(200).json({items: items})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
exports.createOne = async (req, res) => {
    try{
        const item = new Item(req.body)
        res.status(200).json(item)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
exports.deleteOne = async (req, res) => {
    try{
        const item = Item.findByIdAndDelete(req.params.id)
        res.status(200).json(item)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
exports.updateOne = async (req, res) => {
    try{
        const item = Item.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(item)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}