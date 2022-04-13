const cards = [
  {
    tag: {
      name: '旅行随笔',
      color: 'orange',
    },
    author: '柳智文',
    publishDate: new Date(),
    updateDate: new Date(),
    pictures: [
      'https://images.unsplash.com/photo-1645172816097-2d623c0dcad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    ],
    title: '1. 人生当苦无妨，良人当归即好',
    type: 1,
    id: 1,
  },
  {
    tag: {
      name: '前端笔记',
      color: 'blueGreen',
    },
    author: '柳智文',
    publishDate: new Date(),
    updateDate: new Date(),
    pictures: [
      'https://media.istockphoto.com/photos/explosion-of-a-traditional-electric-bulb-shot-taken-in-high-speed-picture-id1285957020?b=1&k=20&m=1285957020&s=170667a&w=0&h=LjKVp9aEQ7hSECmh-HiVjTi52GOezolB4Fax_oGJaes=',
      'https://images.unsplash.com/photo-1645172816097-2d623c0dcad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60 ',
    ],
    title:
      '2. 也罢就这样吧，淡看缘起缘落，有缘聚，无缘不见。猫是可爱的，狼是很帅的。就是说，孤独又可爱又帅。',
    type: 2,
    id: 2,
  },
  {
    tag: {
      name: '生活小记',
      color: 'green',
    },
    author: '柳智文',
    publishDate: new Date(),
    updateDate: new Date(),
    pictures: [
      'https://media.istockphoto.com/photos/the-best-way-to-predict-the-future-is-to-create-it-motivational-quote-picture-id1304357935?b=1&k=20&m=1304357935&s=170667a&w=0&h=tflkvGz1i1XroFMBz4chm33aWj8UbmehLDKjeuhJ-pk=',
      'https://images.unsplash.com/photo-1645172816097-2d623c0dcad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      'https://media.istockphoto.com/photos/explosion-of-a-traditional-electric-bulb-shot-taken-in-high-speed-picture-id1285957020?b=1&k=20&m=1285957020&s=170667a&w=0&h=LjKVp9aEQ7hSECmh-HiVjTi52GOezolB4Fax_oGJaes=',
    ],
    title:
      '3. 你为了你的正义，我为了我的正义。猫是可爱的，狼是很帅的。就是说，孤独又可爱又帅。',
    type: 1,
    id: 3,
  },
  {
    tag: {
      name: '生活小记',
      color: 'green',
    },
    author: '柳智文',
    publishDate: new Date(),
    updateDate: new Date(),
    pictures: [
      'https://media.istockphoto.com/photos/the-best-way-to-predict-the-future-is-to-create-it-motivational-quote-picture-id1304357935?b=1&k=20&m=1304357935&s=170667a&w=0&h=tflkvGz1i1XroFMBz4chm33aWj8UbmehLDKjeuhJ-pk=',
      'https://media.istockphoto.com/photos/asian-male-florist-owner-of-small-business-flower-shop-using-digital-picture-id1317277259?b=1&k=20&m=1317277259&s=170667a&w=0&h=K08QBPPiq5_OOZcksriP_3eHEB1z5diqY14KUad3wiU=',
      'https://media.istockphoto.com/photos/explosion-of-a-traditional-electric-bulb-shot-taken-in-high-speed-picture-id1285957020?b=1&k=20&m=1285957020&s=170667a&w=0&h=LjKVp9aEQ7hSECmh-HiVjTi52GOezolB4Fax_oGJaes=',
      'https://images.unsplash.com/photo-1645172816097-2d623c0dcad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    ],
    title:
      '4. 你为了你的正义，我为了我的正义。猫是可爱的，狼是很帅的。就是说，孤独又可爱又帅。猫是可爱的，狼是很帅的。就是说，孤独又可爱又帅。猫是可爱的，狼是很帅的。就是说，孤独又可爱又帅。猫是可爱的，狼是很帅的。就是说，孤独又可爱又帅。',
    type: 1,
    id: 4,
  },
  {
    tag: {
      name: '生活小记',
      color: 'green',
    },
    author: '柳智文',
    publishDate: new Date(),
    updateDate: new Date(),
    pictures: [
      'https://media.istockphoto.com/photos/the-best-way-to-predict-the-future-is-to-create-it-motivational-quote-picture-id1304357935?b=1&k=20&m=1304357935&s=170667a&w=0&h=tflkvGz1i1XroFMBz4chm33aWj8UbmehLDKjeuhJ-pk=',
    ],
    title:
      '5. 你为了你的正义，我为了我的正义。猫是可爱的，狼是很帅的。就是说，孤独又可爱又帅。猫是可爱的，狼是很帅的。就是说，孤独又可爱又帅。',
    type: 1,
    id: 5,
  },
]

let articleBody = `汪淼觉得，来找他的这四个人是一个奇怪的组合：两名警察和两名军人，如果那两个军人是武警还算正常，但这是两名陆军军官。
汪淼第一眼就对来找他的警察没有好感。其实那名穿警服的年轻人还行，举止很有礼貌，但那位便衣就让人讨厌了。这人长得五大三粗，一脸横肉，穿着件脏兮兮的皮夹克，浑身烟味，说话粗声大嗓，是最令汪淼反感的那类人。
“汪淼？”那人问，直呼其名令汪淼很不舒服，况且那人同时还在点烟，头都不抬一下。不等汪淼回答，他就向旁边那位年轻人示意了一下，后者向汪淼出示了警官证，他点完烟后就直接向屋里闯。
“请不要在我家里抽烟。”汪淼拦住了他。
“哦，对不起，汪教授。这是我们史强队长。”年轻警官微笑着说，同时对姓史的使了个眼色。
“成，那就在楼道里说吧。”史强说着，深深地吸了一大口，手中的烟几乎燃下去一半，之后竟不见吐出烟来。“你问。”他又向年轻警官偏了一下头。
“汪教授，我们是想了解一下，最近你与‘科学边界’学会的成员有过接触，是吧？”“‘科学边界’是一个在国际学术界很有影响的学术组织，成员都是著名学者。这样一个合法的学术组织，我怎么就不能接触了呢？”
“你看看你这个人！”史强大声说，“我们说它不合法了吗？我们说不让你接触了吗？”他说着，刚才吸进肚子里的烟都喷到汪淼脸上。
“那好，这属于个人隐私，我没必要回答你们的问题。”`

const blogs = [
  {
    id: 1,
    title: '人生当苦无妨，良人当归即好',
    author: '柳智文',
    publishDate: new Date(),
    updateDate: new Date(),
    body: 'test1.md',
  },
  {
    id: 2,
    title: '也罢就这样吧，淡看缘起缘落，有缘聚，无缘不见。',
    author: '柳智文',
    publishDate: new Date(),
    updateDate: new Date(),
    body: 'test1.md',
  },
  {
    id: 3,
    title: '你为了你的正义，我为了我的正义。',
    author: '柳智文',
    publishDate: new Date(),
    updateDate: new Date(),
    body: 'test1.md',
  },
  {
    id: 4,
    title:
      '猫是可爱的，狼是很帅的。就是说，孤独又可爱又帅。猫是可爱的，狼是很帅的。',
    author: '柳智文',
    publishDate: new Date(),
    updateDate: new Date(),
    body: 'test1.md',
  },
  {
    id: 5,
    title:
      '你为了你的正义，我为了我的正义。猫是可爱的，狼是很帅的。就是说，孤独又可爱又帅。猫是可爱的，狼是很帅的。就是说，孤独又可爱又帅。',
    author: '柳智文',
    publishDate: new Date(),
    updateDate: new Date(),
    body: 'test1.md',
  },
]

const users = [
  {
    username: 'siven',
    password: '$2a$06$Tx5LH.EHo9ea7LprfGj.NeVSPrMUlVVNKPeFGJ6ULThUDwMsibaW2',
  },
]

module.exports = {
  cards,
  blogs,
  users,
}
