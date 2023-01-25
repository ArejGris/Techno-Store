import { createStore} from "vuex";
const store=createStore({
state(){
    return{
        catigoris:[
            {id:'1',title:'Cameras',img:require('../src/assets/camer1.png'),items:['p1','p2'],text:'this is for all food materirials'},
            {id:'2',title:'HeadPhones',img:require('../src/assets/header1.jpeg'),items:['p2','p3'],text:'this is for all technology materirials'},
            {id:'3',title:'Latop',img:require('../src/assets/laptop1.jpeg'),items:['p3','p4'],text:'this is for all sport materirials'},
            {id:'4',title:'MobilePhones',img:require('../src/assets/mobile1.jpeg'),items:['p5','p6'],text:'this is for all kids materirials'}
        ],
        products: [
            {
                id: 'p1',
                image:
                require('../src/assets/camer1.png'),
                title: 'Camera Canon',
                catId:'1',
                price: '99.99',
                text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
           
              },
              {
                id: 'p2',
                image:
                  require('../src/assets/camer2.jpg'),
                title: 'Camera Digital',
                catId:'1',
                price: '129.99',
                text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
           
              },
            {
              id: 'p3',
              image:
                require('../src/assets/camer3.jpg'),
              title: 'Camera Amazon',
              catId:'1',
              price: '99.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
           
            },
            {
              id: 'p4',
              image:
                require('../src/assets/camer4.jpeg'),
              title: 'Camera Optinal',
              catId:'1',
              price: '129.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
           
            },
            {
              id: 'p5',
              image:
                require('../src/assets/camer5.jpeg'),
              title: 'Camera OldFashion',
              catId:'1',
              price: '6.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
            },
            {
              id: 'p6',
              image:
                require('../src/assets/header1.jpeg'),
              title: 'HeadPhones OldFashion',
              catId:'2',
              price: '6.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
            },
            {
              id: 'p7',
              image:
                require('../src/assets/header2.jpg'),
              title: 'HeadPhones Amazon',
              catId:'2',
              price: '6.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
            },
            {
              id: 'p8',
              image:
                require('../src/assets/header4.jpg'),
              title: 'HeadPhones Teak-Green',
              catId:'2',
              price: '6.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
            },
            {
              id: 'p9',
              image:
                require('../src/assets/header5.jpg'),
              title: 'HeadPhones Teak-Red',
              catId:'2',
              price: '6.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
            },{
              id: 'p10',
              image:
                require('../src/assets/header6.jpg'),
              title: 'HeadPhones Teak-OffWhite',
              catId:'2',
              price: '6.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
            },{
              id: 'p11',
              image:
                require('../src/assets/header3.jpeg'),
              title: 'HeadPhones Teak-Blue',
              catId:'2',
              price: '6.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
            },
            {
              id: 'p12',
              image:
                require('../src/assets/laptop1.jpeg'),
              title: 'Laptop OldFashion',
              catId:'3',
              price: '6.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
            }, {
              id: 'p13',
              image:
                require('../src/assets/laptop2.jpg'),
              title: 'Laptop Apple',
              catId:'3',
              price: '6.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
            }, {
              id: 'p14',
              image:
                require('../src/assets/laptop3.jpg'),
              title: 'Laptop Celeron',
              catId:'3',
              price: '6.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
            }, {
              id: 'p15',
              image:
                require('../src/assets/laptop4.jpg'),
              title: 'Laptop Amazon',
              catId:'3',
              price: '6.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
            },
            {
              id: 'p16',
              image:
                require('../src/assets/mobile1.jpeg'),
              title: 'MobilePhone OldFashion',
              catId:'4',
              price: '6.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
            },
            {
              id: 'p17',
              image:
                require('../src/assets/mobile2.jpeg'),
              title: 'MobilePhone IPhone',
              catId:'4',
              price: '6.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
            },
            {
              id: 'p18',
              image:
                require('../src/assets/phone3.webp'),
              title: 'MobilePhone Nokia',
              catId:'4',
              price: '6.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
            },
            {
              id: 'p19',
              image:
                require('../src/assets/phone5.jpg'),
              title: 'MobilePhone Android',
              catId:'4',
              price: '6.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
            },
            {
              id: 'p20',
              image:
                require('../src/assets/phone6.jpg'),
              title: 'MobilePhone ShowMe',
              catId:'4',
              price: '6.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
            },
            {
              id: 'p21',
              image:
                require('../src/assets/phone7.jpg'),
              title: 'MobilePhone Infinix',
              catId:'4',
              price: '6.99',
              text:" component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the  for advanced selection options"
            }
          ]

    }
},

getters:{
catigoris(state){
    return state.catigoris
},
products(state){
    return state.products
}
},

});
export default store