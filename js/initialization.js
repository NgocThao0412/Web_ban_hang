function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status:1,
            title:'Bột Chiên',
            img:'access/image /product/Bột Chiên.JPG',
            category: 'Món ăn vặt',
            price: 40000,
            desc:'Bột chiên giòn rụm, ăn cùng với trứng và đu đủ bào, chấm cùng nước tuong pha chua ngọt. Món ăn vặt thơm ngon đặc trứng của Sài Gòn',
            
        },
        {
            id: 2,
            status:'1',
            title:'Bún Đậu Mắm Tôm',
            img:'access/image /product/Bún Đậu.jpg',
            category: 'Món mặn',
            price: 120000,
            desc:'Bún đậu mắm tôm thêm ngon, gồm bún lá, đậu hũ chiên vàng, thịt luộc, chả cốm và dưa leo. Ăn kèm mắm tôm pha chua ngọt, cay đậm vị Việt ',
      
        },
         {
            id: 3,
            status:'1',
            title:'Chè Thái',
            img:'access/image /product/Chè Thái.JPG',
            category: 'Món tráng miệng',
            price: 35000,
            desc:'Chè Thái mát lạnh lạnh với nhiều loại trái cây tươi, thạch giòn, mít thơm, nhãn mọng và sầu riêng béo ngậy. Hòa quyện cùng nước cốt dừa ngọt dịu, giải nhiệt tuyệt vời ',
      
        },
        {
            id: 4,
            status:'1',
            title:'Milo Dầm',
            img:'access/image /product/Milo Dầm.PNG',
            category: 'Nước uống',
            price: 30000,
            desc:'',
      
        },
        {
            id: '############',
            status:'#########',
            title:'#################',
            img:'access/image /product/Gỏi Cuốn.jpg',
            category: 'Món mặn',
            price: '################',
            desc:'########################################################################',
      
        },
         {
            id: '############',
            status:'#########',
            title:'#################',
            img:'access/image /product/Phở.jpg',
            category: 'Món mặn',
            price: '################',
            desc:'########################################################################',
      
        },
        {
            id: '############',
            status:'#########',
            title:'#################',
            img:'access/image /product/Gà Luộc.jpg',
            category: 'Món mặn',
            price: '################',
            desc:'########################################################################',
      
        },

        ]
    }
}
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if(!accounts){
        accounts = [];
        accounts.push({
            fullname:"Lê Thị Ngọc Thảo",
            phone:"NgocThao0412",
            password: "123456@",
            address: 'https://github.com/NgocThao0412',
            email: 'happyhappy123@gmail.com',
            status: 1,
            join: new Date(),
            cart:[],
            usertype: 1
    })
    accounts.push({
        fullname:"Đặng Ngọc Minh Anh",
        phone:"1234567890",
        address:'',
        status: 1,
        join: new Date(),
        cart:[],
        userType:1
    })
    localStorage.setItem('accounts', JSON.stringify(accounts));
    }
    Window.onload = function(){
        createProduct();
        createAdminAccount();
    }
}