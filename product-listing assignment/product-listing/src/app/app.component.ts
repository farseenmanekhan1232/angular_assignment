import { Component, OnInit } from '@angular/core';

import { product } from './app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  productList: product[] = [];

  currLength: number = this.productList[-1]?.id;

  showDialog = false;

  toggleAddDialog() {
    this.showDialog = !this.showDialog;
  }

  ngOnInit() {
    this.currLength = 0;
    fetch('http://localhost:3000')
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        products.forEach(({ id, title, price, description, thumbnail }) => {
          if (thumbnail) {
            this.productList.push({
              id: id,
              title: title,
              price: price,
              description: description,
              thumbnail: thumbnail,
            });
          }
        });
        this.currLength = this.productList[this.productList.length - 1].id;
      });
  }

  removeId(id) {
    fetch(`http://localhost:3000/${id}`, { method: 'DELETE' }).then((res) => {
      // console.log(res.status);
      if (res.status == 200)
        this.productList = this.productList.filter(
          (product) => product.id != id
        );
    });

    console.log(this.currLength);
  }
  addNewProduct(v) {
    if (v.title && v.description && v.thumbnail && v.price) {
      this.productList.push(v);
      console.log(JSON.stringify(v));

      const url = 'http://localhost:3000/'; // Replace with your endpoint URL

      const data = v;

      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          console.log('Response:', data);
          // Process the response data
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle any errors
        });
    }
  }

  updateLastId(v) {
    this.currLength = v;
  }
}
