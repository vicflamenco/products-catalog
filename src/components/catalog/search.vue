<template>
    <div class="input-group mb-3">
      <input type="text" class="form-control"
        :placeholder="placeholder"
        v-model="searchTerm"
        @keyup="$emit('search', searchTerm)">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" 
          type="button" 
          @click="$emit('search', searchTerm)">
          Search
        </button>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'search',
    props: { placeholder: String },
    data: function(){
      return { searchTerm: '' }
    }
  }
</script>