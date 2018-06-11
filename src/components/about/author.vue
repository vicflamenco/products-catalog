<template>
    <div class="col-sm-12 col-md-6">
      <img :src="url" class="about-profile-pic img-rounded">
      <h3>{{name}}</h3>
      <p>Brown is such a nice color. How do you make a round circle with a square knife?
         That's your challenge for the day. I spend a lot of time walking around in the 
         woods and talking to trees, and squirrels, and little rabbits and stuff. A 
         beautiful little sunset. Don't hurry. Take your time and enjoy. Everyone wants 
         to enjoy the good parts - but you have to build the framework first.
      </p>
    </div>
</template>

<script>
  export default {
    name: 'author',
    props: {
        name: String
    },
    computed: {
        url() {
            return '/static/img/' + this.name.toLowerCase() + '.jpg';
        }
    }
  }
</script>

<style scoped>
  p {
    text-align: justify;
  }
  .about-profile-pic {
      width: 40%;
      float: left;
      margin: 0 1em 1em 0;
  }
  .img-rounded {
    border-radius: 6px;
  }
</style>