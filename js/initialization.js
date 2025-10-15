function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status:1,
            title:'Bột Chiên',
            img:'access/image /Bột Chiên.JPG',
            category: 'Món ăn vặt',
            price: 40000,
            desc:'Bột chiên giòn rụm, ăn cùng với trứng và đu đủ bào, chấm cùng nước tuong pha chua ngọt. Món ăn vặt thơm ngon đặc trứng của Sài Gòn',
            
        },
        {
            id: 2,
            status:'1',
            title:'Bún Đậu Mắm Tôm',
            img:'access/image /Bún Đậu.jpg',
            category: 'Món mặn',
            price: 120000,
            desc:'Bún đậu mắm tôm thêm ngon, gồm bún lá, đậu hũ chiên vàng, thịt luộc, chả cốm và dưa leo. Ăn kèm mắm tôm pha chua ngọt, cay đậm vị Việt ',
      
        },
         {
            id: 3,
            status:'1',
            title:'Chè Thái',
            img:'access/image /Chè Thái.JPG',
            category: 'Món tráng miệng',
            price: 35000,
            desc:'Chè Thái mát lạnh lạnh với nhiều loại trái cây tươi, thạch giòn, mít thơm, nhãn mọng và sầu riêng béo ngậy. Hòa quyện cùng nước cốt dừa ngọt dịu, giải nhiệt tuyệt vời ',
      
        },
        {
            id: 4,
            status:'1',
            title:'Milo Dầm',
            img:'access/image /Milo Dầm.PNG',
            category: 'Nước uống',
            price: 30000,
            desc:'',
      
        },
        {
            id: '############',
            status:'#########',
            title:'#################',
            img:'access/image /Gỏi Cuốn.jpg',
            category: 'Món mặn',
            price: '################',
            desc:'########################################################################',
      
        },
         {
            id: '############',
            status:'#########',
            title:'#################',
            img:'access/image /Phở.jpg',
            category: 'Món mặn',
            price: '################',
            desc:'########################################################################',
      
        },
        {
            id: '############',
            status:'#########',
            title:'#################',
            img:'access/image /Gà Luộc.jpg',
            category: 'Món mặn',
            price: '################',
            desc:'########################################################################',
      
        },
        
        ]
    }
}
function createAdminAccount() {

}