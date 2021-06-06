import Category from '../models/category'
import CategoryService from './categoryService'
import createError from 'http-errors'
class CategoryServiceImpl implements CategoryService{

    private category
    constructor(){
        this.category = Category
    }
    public async getOneCategory(id: number): Promise<Category> {
        try {
            const obj:Category | null = await this.category.findByPk(id);
            if(!obj) throw createError(404,`No se encontro el id ${id}`)
            return obj
        } catch (err) {
            throw err
        }
    }
    public async listCategory(): Promise<Category[]> {
        try {
            const list : Category[] = await this.category.findAll();
            return list
        } catch (err) {
            throw err
        }
    }
    public editCateogry(id: number, obj: Category): Promise<Category> {
        throw new Error('Method not implemented.')
    }
    public deleteCategory(id: number): Promise<boolean> {
        throw new Error('Method not implemented.')
    }
    public async createCategory(obj: Category): Promise<Category> {
        //throw new Error('Method not implemented.');
        try {
            const raw = await this.category.create(obj)
            return raw
        } catch (err) {
            throw err
        }
    }
  

}
export default CategoryServiceImpl