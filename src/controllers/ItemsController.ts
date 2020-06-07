import { Response, Request } from 'express';

import knex from '../database/connection';
import API_URL from '../../enviroments';

class ItemsController {
  
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `${API_URL}/uploads/${item.image}`
      };
    })

    return response.json(serializedItems);
  }
}

export default ItemsController;