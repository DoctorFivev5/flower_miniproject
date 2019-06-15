// pages/content/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    list:{},
    list1: {
      title: "美丽的蝴蝶花", upic: "/images/1.png", user: "赵大宝", content1: "我家对面的门前有一大丛漂亮的花，它们在阳光下竞相开放，五颜六色。但蝴蝶花在这些花中脱颖而出，宛如一颗钻石在花丛中闪耀着他的光芒。", content2: "蝴蝶花是一种由主干分离出枝叶后开出的花朵。蝴蝶花是因为长得像蝴蝶而得名。一般在七到八月开放，九月凋谢，也有少数生命力强的可以开到十月。蝴蝶花的主干呈深绿色，分枝为淡绿色。花朵下有一鼓鼓的小囊。里面有许多细小的小籽。", content3: "蝴蝶花的花瓣大多为橘红色，一共有六朵，没三朵的形状是一样的，其中三朵较大的上面颜色分布不一样，顶端是统一的淡橘黄色，末端上有一些点点的红色。较小的三朵花瓣为淡橘黄色在周围，红点则在中间。花瓣不仅在颜色分布、形状大小和蝴蝶翅膀很像，而且用手摸上去的感觉也极为相像。蝴蝶花没有浓烈的香味，而是淡淡的幽香，让人心旷神怡。", content4: "蝴蝶花的时间观念也极强。它们每天傍晚时会收拢，接着花瓣卷成一条毛毛虫的样子。次日清晨，便“破茧成蝶”，张开花瓣，从一条“毛毛虫”蜕变成了一只美丽的“蝴蝶”。", content5:"美丽的蝴蝶花！你像一只五彩斑斓的蝴蝶在我心中飞舞！",pic: "/images/hd.jpg" },
    list2: { title: "亲爱的桂花树", upic: "/images/2.jpg", user: "庄雨蝶", content1: "多少年了？十年、二十年、三十年？亦或是更久？我早已不记得了，我只知道从父亲那一代起你就在这了。亲爱的桂花树啊，你见证了一代又一代人的成长，你的身上承载着我的欢笑与我的泪水。此时我正站在你身前，久久的注视着你，抚摸着你身上那一道道岁月拂过的痕迹。那痕迹在诉说着你身上的秘密;在向我传递着你的古老气息；在让我感受着你所经历的沧海桑田……", content2: "记得小时候的一次，我和我的小伙伴们在我的家里玩捉迷藏的游戏，由唐璐来找，我和另外几个小伙伴藏起来，可我把家里跑了个遍也没找到一个躲藏的好地方。最后眼看着唐璐就要数完一百个数了，我才赶紧嗖嗖嗖几下爬到你身上，找了个视线不错还十分结实的枝桠上像个树袋熊一样趴在那儿并紧紧的抱住枝丫等待别人被找到，而你那密密的树叶正好可以把我挡住，从而不被唐璐发现。可等着等着，瞌睡虫来袭，而我因为那段时间一直失眠而不敌困意，竟趴在那儿睡着了，当我醒来的时候，已经很晚了，小伙伴们也早已各自回家了……", content3: "说也怪，自从在桂花树上睡了那一觉后，我每天都睡得十分安稳，而且我还发现在那件事发生的几个月后，原来我睡过的那根树枝竟和它旁边的八九根树枝交织在一起，形成网状的一张床。而从那以后，我也就留下了一个习惯——每年夏天我都会每天中午爬到那张“床”上睡午觉和乘凉。（但也有少数时候被不小心掉我身上的虫子吓得从树上摔了下去，只不过因为树下的草坪很软，所以每次都没摔疼。）", content4:"金秋时节，如碎金般闪闪烁烁的桂花如约而至。这时，桂花树便迎来了我和我的秋千。秋千被系在桂花树上，而我喜欢一个人坐在秋千上，因为这时候我可以和桂花树交流。桂花树身上的痕迹诉说着它的故事，可我总想挖掘更多的新故事，一脸深思的望着桂花树。我双腿轻轻一荡，满树的馨香伴随着秋千的摇晃“扑簌簌”的落下来，落在了我身上，落在我的发丝上，不料啊，还落在了我心上……",pic: "/images/gh.jpg" }, 
    list3: { title: "校门口的栀子花", upic: "/images/3.jpg", user: "张珈榕", content1: "裹挟一袭迷人的芬芳，宛若青春的白色裙裳，亦如婉约纯净的脸庞。五月的开放……", content2: "我在这个初夏，携着白裙款款而来。带着对世界的新奇，来了，一朵俏丽的栀子花，等待盛开……我在一大丛盛开的栀子花中，在一所学校的大门口里长出花苞。在来来往往的学生们眼中，我们是那么娇艳，我静静地看着他们，精神抖擞的他们多么有活力啊。而我，还只是一个花骨朵儿，胖胖的身体，花瓣重重叠叠地包裹着，边上还镶着淡绿的花边，看上去十分清新。", content3: "嗯，我喜欢这样的我！那茵茵的绿色，无论是草，还是我的枝叶，又或是同伴，在我的身边与我一起，看上去又是多么赏心悦目啊！清晨，露珠在叶面上跳舞，一个不小心便跳到了草地上，一声清脆的滴落声吵醒了我，我迷迷糊糊地睁开眼睛，心中一阵雀跃：最喜欢早上了！我看到一个戴红领巾的小男孩在校门口张望，好像是忘带了什么东西了吧，是在等待爸爸妈妈的“救援”了吧，看他一只手紧紧地握着另一只手，就知道他有多么焦急。", content4: "我想：要是我能走动，一定要帮帮他！呀，一个小妹妹被高年级的大哥哥拦下了？哦，原来是忘了戴红领巾了呀。还好还好，她及时从书包里拿出来戴上了。我一转眼，又见一位大哥哥（应该可以这么说），唉，要迟到了。我心里一直在叫：快呀，要迟到了！快冲呀……",  pic: "/images/zzh.jpg" }, 
    list4: { title: "迷人的桃花园", upic: "/images/4.jpg", user: "王思蘅", content1: "美丽的春姑娘带着微笑来到了人间，一派迷人的景象映入人们的眼帘。数不尽的花竞相开放，有和通通的山茶花，金灿灿的油菜花，雪白的梨花……可我最喜欢的还是桃花。", content2: "一个阳光明媚的今天一天，我们一家人决定到桃花园去看桃花。一路上，我们欢声笑语，欣赏美景。路边的野花开出了美丽的花朵，引来了蜜蜂和蝴蝶翩翩起舞；小草随风摇曳，仿佛能听懂我们谈话，像在同我们招手一样。", content3: "我们在桃花园下面，放眼望去，哇！整个桃花园就成了花的海洋。走的越来越近，一朵朵，一簇簇粉红的花瓣挤满了枝头。他们就好像一把把粉红色的花伞。花儿密密麻麻，一朵紧挨一朵，有的躲在枝干的背后，好像在捉迷藏，又好像很害羞。有的花瓣儿，薄薄的，金黄色的小花蕊细细长长的往上挑，像小姑娘的长睫毛，让人嫉妒。我深深地吸了口气，闻到了桃花的清香。我们坐在桃树下，感受着浓浓的土山土气的气息，新鲜的空气，沁人心脾，一阵阵微风吹来，一棵棵桃树上的花瓣纷纷扬扬地飘落下来，就像一只只蝴蝶在跳着欢乐的舞蹈。", content4:"忽然，我看见有的桃树下，几朵月季花，在尽情的绽放，有一种大红的月季花，红得像火炬，；有一种淡黄的月季花，像用金丝线精心绣成的；，还有一种紫斑月季花，像是白色的花瓣点缀着紫色的水晶。真是“万紫千红总是春”啊！这真是迷人的桃花园啊！我爱桃花园，不光因为它的美丽，还因为它的可爱，更因为它的清香。", pic: "/images/th.jpg" }, 
    list5: { title: "浪漫樱花", upic: "/images/5.jpg", user: "徐洁璐", content1: "早晨，还在睡梦中的我忽然闻到一阵阵花香，我睁开眼睛，迫不急待地拉开窗帘，一阵清风吹来，凉凉的风中裹挟着樱花的淡淡香气。放眼看去小区花园里的樱花已经开了，那一棵粉嘟嘟的，那一棵又是红艳艳的，而这一棵呢又是洁白无暇的，它们仿佛一群打扮得花枝招展的少女在互相比美呢！瞧！它正对我微笑呢，三月的樱花真是美呀！", content2: "远看，这一簇簇的樱花就像正在燃烧的粉红的火焰；一朵朵粉红的云彩；那一棵棵樱花树就像一个个娇羞的少女，微风拂过，少女们跳起了优美的舞蹈，时而欢快，时而热情，时而又高雅。风停了，它们又变成了一个个娇羞少女。", content3: "近看，这一棵棵树上，有些樱花已经绽放，露出自己漂亮的脸蛋，它们竞相比美，生怕别人看不见自已；有一些呢，半开着，看样子，它们挺着急的呢，努力地想要张开花瓣，想让人们看见她那红扑扑的小脸。还有一些还是一个个花骨朵儿，这些小花骨朵儿相比之下，就显得有点娇小可爱了，瞧它们就象一个个快要爆炸的气球，看起来可爱极了，这些小气球夹在这些绽放的花朵中间，为它们增添了一些生气。", content4: "一朵朵的樱花有是五片花瓣，有的呢，又是层层叠叠的，花瓣的姿态各有千秋，让人目不睱接，美不胜收！黄色的花心伸到花瓣外，冲着我们微笑。在阳光的照耀下美丽极了！粉红的花瓣楚楚动人。我站在樱花树下，风儿吹过，樱花树轻轻摇，眼前是下起了粉红的花瓣雨，是一群群漫天飞舞的蝴蝶，还是已经置身于粉红色的海洋里……。我被花瓣雨洒满全身，陶醉在其中不能自拨。此情此景我不由得想起了那首好听的歌曲－《樱花》：“暮春时节天将晓，霞光照眼花英笑，万里长空白云起，美丽芬芳任风飘。去看花！去看花！看花要趁早。樱花啊，樱花啊，阳春三月晴空下，一望无际是樱花。如霞似云花烂漫，芳香飘荡美如画……",pic: "/images/yh.jpg" }, 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title:options.title
    })
    var that=this;
    if (that.data.title == "美丽的蝴蝶花"){
      that.setData({
        list:that.data.list1
      })
    }
    if (that.data.title == "亲爱的桂花树") {
      that.setData({
        list: that.data.list2
      })
    }
    if (that.data.title == "校门口的栀子花") {
      that.setData({
        list: that.data.list3
      })
    }
    if (that.data.title == "迷人的桃花园") {
      that.setData({
        list: that.data.list4
      })
    }
    if (that.data.title == "浪漫樱花") {
      that.setData({
        list: that.data.list5
      })
    }

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})