import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

const couchbase = require('couchbase');
const cluster = new couchbase.Cluster('http://127.0.0.1:8091', {
  username: 'Administrator',
  password: '123321',
});
var bucket = cluster.bucket('nest_app');

var product = bucket.collection('product');

@Injectable()
export class ProductService {
  async createProduct(body: any): Promise<any> {
    console.log(cluster);

    return await product.upsert(uuidv4(), body);
  }

  async list(): Promise<any> {
    return {}; //await cluster.query('SELECT * FROM `nest_app`');
  }
}
