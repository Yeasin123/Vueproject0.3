<template>
   <section class="main_content">
     <div class="container">
          <div class="row">
          <div class="col-md-4" v-for="senditem in senditems" :key="senditem.id">
              <div>
                <b-card
                    title="Card Title"
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                    {{senditem.description}}
                    </b-card-text>
                    <b-card-text>
                    {{senditem.price}} TK
                    </b-card-text>

                    <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
                </div>
          </div>
         
          
      </div>
     </div>
  </section>
</template>

<script>
export default {
 props:['senditems']

}
</script>

<style scoped>
.main_content{
  width:100%;
  padding: 27px 0;
}
</style>

