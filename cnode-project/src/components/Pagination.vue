<template>
    <div class="pagination">
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
    </div>
</template>

<script>
export default{
    name: 'Pagination',
    props:[],
    data(){
        return{

        }
    },
    methods:{

    },
    computed:{},
    
}
</script>

<style scoped>
.pagination {
  margin-top: 5px;
  margin-bottom: 20px;
  background-color: white;
  padding: 6px 20px;
  border-radius: 5px;
  /*box-shadow: 0px 2px 9px #888888;*/
  border: 1px solid #888888;
}

button {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #778087;
  border-radius: 3px;
  outline: none;
  height: 21px;
  cursor: pointer;
  padding: 0 2px;
  width: 55px;
  height: 29px;
}
.pagebtn {
  position: relative;
  bottom: 1px;
  width: 40px;
  margin: 0 4px;
}

button:hover,
.currentPage {
  color: white;
  background-color: #1f1b1b;
}
</style>