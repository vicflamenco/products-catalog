<template>
  <div>
    <h1>Products</h1>
    <search placeholder="Search products"
      @search="searchTerm = $event" />
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Inventory</th>
        </tr>
      </thead>
      <tbody v-if="pageProducts.length">
        <tr v-for="product in pageProducts" :key="product.id">
          <td>{{product.title}}</td>
          <td>{{product.price | currency('€')}}</td>
          <td>{{product.inventory}}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr><td colspan="3">No records found</td></tr>
      </tbody>
    </table>
    <b-pagination align="right" size="md"
      :total-rows="totalRows" :per-page="pageSize" 
      v-model="pageNumber">
    </b-pagination>
  </div>
</template>

<script>
  import search from './../catalog/search'
  import productsService from './../../services/products'

  export default {
    name: 'products',
    components: {
      search
    },
    data: () => {
      return {
        products: [],
        pageNumber: 0,
        pageSize: 5,
        totalRows: 0,
        searchTerm: ''
      }
    },
    created() {
      const service = new productsService();
      this.products = service.getProducts();
      this.totalRows = this.products.length;
    },
    computed: {
      pageProducts: function() {
        const pageNumberIndex = this.pageNumber - 1;
        const searchTermClean = this.searchTerm.trim();
        
        let result = this.products.slice();

        result = result.filter(product => product.title.toUpperCase().includes(searchTermClean.toUpperCase()));

        this.totalRows = result.length;
        return result.slice(pageNumberIndex * this.pageSize, (pageNumberIndex + 1) * this.pageSize);
      }
    }
  }
</script>

<style scoped>
  h1 {
    margin-bottom: 20px;
  }
  div {
    padding-top: 0px;
    margin-top: 0px;
  }
</style>