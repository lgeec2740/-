var app = new Vue({
    el: '#app',
    data(){return {
        isMain: true,
        isAll: false,
        isCreate: false, 
        isEdit: false, 
        isManage: false, 
        isPost: false, 
      }
    },
    data(){return {
        isMain: false,
        isAll: true,
        isCreate: false, 
        isEdit: false, 
        isManage: false, 
        isPost: false, 
      }
    },
    data(){return {
        isMain: false,
        isAll: false,
        isCreate: true, 
        isEdit: false, 
        isManage: false, 
        isPost: false, 
      }
    },
    data(){return {
        isMain: false,
        isAll: false,
        isCreate: false, 
        isEdit: true, 
        isManage: false, 
        isPost: false, 
      }
    },
    data(){return {
        isMain: false,
        isAll: false,
        isCreate: false, 
        isEdit: false, 
        isManage: true, 
        isPost: false, 
      }
    },
    data(){return {
        isMain: false,
        isAll: false,
        isCreate: false, 
        isEdit: false, 
        isManage: false, 
        isPost: true, 
      }
    },
    methods: {
      enterMain() {
        this.isMain = true;
        this.isAll = false;
        this.isCreate = false;
        this.isEdit = false;
        this.isManage = false;
        this.isPost = false;
        this.$forceUpdate();
      },
      enterAll() {
        this.isMain = false;
        this.isAll = true;
        this.isCreate = false;
        this.isEdit = false;
        this.isManage = false;
        this.isPost = false;
        this.$forceUpdate();
      },
      enterCreate() {
        this.isMain = false;
        this.isAll = false;
        this.isCreate = true;
        this.isEdit = false;
        this.isManage = false;
        this.isPost = false;
        this.$forceUpdate();
      },
      enterEdit() {
        this.isMain = false;
        this.isAll = false;
        this.isCreate = false;
        this.isEdit = true;
        this.isManage = false;
        this.isPost = false;
        this.$forceUpdate();
      },
      enterManage() {
        this.isMain = false;
        this.isAll = false;
        this.isCreate = false;
        this.isEdit = false;
        this.isManage = true;
        this.isPost = false;
        this.$forceUpdate();
      },
      enterPost() {
        this.isMain = false;
        this.isAll = false;
        this.isCreate = false;
        this.isEdit = false;
        this.isManage = false;
        this.isPost = true;
        this.$forceUpdate();
      }
    }
    
})
