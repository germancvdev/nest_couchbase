import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

const couchbase = require('couchbase');
const cluster = new couchbase.Cluster('http://127.0.0.1:8091', {
  username: 'Administrator',
  password: 'password',
});
var bucket = cluster.bucket('nest_app');

var product = bucket.collection('product');

@Injectable()
export class ProductService {
  async createProduct(body: any): Promise<any> {
    return await product.insert(uuidv4(), body);
  }

  async list(): Promise<any> {
    return await cluster.query(
      'SELECT name FROM `travel-sample` where type="airline"',
    );
  }
  async count(): Promise<any> {
    return await cluster.query('SELECT count(*) FROM `nest_app`');
  }
}
