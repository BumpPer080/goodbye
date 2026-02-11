
import { Profile, SpecialCard } from './types';

export const PROFILES: Profile[] = [
  { 
    id: '1', 
    name: 'พี่จิน', 
    icon: 'person_heart', 
    color: 'from-blue-400 to-indigo-800', 
    isLocked: true,
    cards: [
      {
        id: 'c1',
        type: 'illustration',
        title: 'Thank you for everything.',
        series: 'Team Memories',
        imageUrl: "/imgs/b1.jpg",
        bgColor: 'bg-card-cream'
      },
      {
        id: 'c2',
        type: 'photo',
        recipient: 'พี่จิน',
        author: 'จากน้องบั๊มสุดหล่อ',
        message: "ขอบคุณพี่จินมากๆ เลยนะครับสำหรับคำแนะนำดีๆ และความเป็นกันเองที่มีให้เสมอมา ขอบคุณที่รักและเอ็นดูน้องคนนี้เสมอนะครับ ที่นี่เป็นบริษัทแรกที่ผมได้ทำงานด้วยและก็ได้ทำหลายอย่างมากมายเลยถือว่าเป็นประสบการณ์ที่ดีมากๆเลยครับ  สุดท้ายนี้ขอบคุณสำหรับทุกอย่างจริงๆ ครับ!",
        series: 'Team Memories',
        imageUrl: "/imgs/team.jpg",
        bgColor: 'bg-white'
      }
    ]
  },
  { 
    id: '2', 
    name: 'พี่บูม', 
    icon: 'pregnant_woman', 
    color: 'from-red-500 to-pink-600', 
    isLocked: true,
    cards: [
      {
        id: 'c3',
        type: 'illustration',
        title: 'Thank you for everything.',
        series: 'Team Memories',
        imageUrl: "/imgs/b1.jpg",
        bgColor: 'bg-card-cream'
      },
      {
        id: 'c4',
        type: 'photo',
        recipient: 'พี่บูม',
        author: 'จากน้องบั๊มสุดหล่อ',
        message: "สำหรับบ่าวบูม ขอบคุณพี่ที่รับจบแทนทุกคนในบริษัทคือทุกอย่างจริงๆครับ พี่บูมแม่งโคตรเก่งเลย แต่ว่าบางอย่างก็ไม่ต้องรับขนาดนั้นครับมันหนักเราเปล่าๆ ดูแลสุขภาพด้วยนะครับพี่ ขอบคุณนะครับพี่ ไว้เจอกันใหม่!",
        series: 'Team Memories',
        imageUrl: "/imgs/team.jpg",
        bgColor: 'bg-white'
      }
    ] 
  },
  { 
    id: '3', 
    name: 'พี่ดิววี่', 
    icon: 'flutter_dash', 
    color: 'from-green-500 to-teal-600', 
    isLocked: true,
    cards: [
      {
        id: 'c5',
        type: 'illustration',
        title: 'Thank you for everything.',
        series: 'Team Memories',
        imageUrl: "/imgs/b1.jpg",
        bgColor: 'bg-card-cream'
      },
      {
        id: 'c6',
        type: 'photo',
        recipient: 'พี่ดิววี่',
        author: 'จากน้องบั๊มสุดหล่อ',
        message: "สำหรับพี่สาวสุดสวย ขอบคุณพี่สาวที่คอยรับฟังปัญหาของน้องเสมอมา ขอบคุณที่คอยให้คำแนะนำดีๆ และเป็นกำลังใจให้น้องเสมอมา ขอบคุณสำหรับทุกอย่างจริงๆ ครับ! ไว้เจอกันใหม่นะครับ!",
        series: 'Team Memories',
        imageUrl: "/imgs/team.jpg",
        bgColor: 'bg-white'
      }
    ]
  },
  { 
    id: '4', 
    name: 'พี่เบนซ์', 
    icon: 'face_2', 
    color: 'from-yellow-400 to-orange-500', 
    isLocked: true,
    cards: [
      {
        id: 'c7',
        type: 'illustration',
        title: 'Thank you for everything.',
        series: 'Team Memories',
        imageUrl: "/imgs/b1.jpg",
        bgColor: 'bg-card-cream'
      },
      {
        id: 'c8',
        type: 'photo',
        recipient: 'พี่เบนซ์',
        author: 'จากน้องบั๊มสุดหล่อ',
        message: "สำหรับพี่เบนซ์ ขอบคุณพี่เบนซ์นะครับ พี่สาวสุดสวยต่อยตึง ที่สามารถบวกแทนน้องได้5555 เวลามีปัญหาเรื่องที่จอดรถ ไว้ใจพี่เบนซ์ได้ สุดท้ายนี้อยากจะบอกว่าสู้ๆต่อไปนะครับพี่อย่าไปยอมคนไทยด้วยกันบวกได้บวกก่อนเลย!",
        series: 'Team Memories',
        imageUrl: "/imgs/team.jpg",
        bgColor: 'bg-white'
      }
    ]
  },
  { 
    id: '5', 
    name: 'พี่เพชร', 
    icon: 'owl', 
    color: 'from-purple-500 to-violet-700', 
    isLocked: true,
    cards: [
      {
        id: 'c9',
        type: 'illustration',
        title: 'Thank you for everything.',
        series: 'Team Memories',
        imageUrl: "/imgs/b1.jpg",
        bgColor: 'bg-card-cream'
      },
      {
        id: 'c10',
        type: 'photo',
        recipient: 'พี่เพชร',
        author: 'จากน้องบั๊มสุดหล่อ',
        message: "สำหรับพี่เพชร ขอบคุณพี่เพชรนะครับ พี่ชายสุดหล่อ ที่คอยรับฟังปัญหาของน้องเสมอมา ขอบคุณที่คอยให้คำแนะนำดีๆ และเป็นกำลังใจให้เสมอมา ขอบคุณพี่เพรชที่รับจบในทุกๆเรื่องให้กับทีมไอทีของเรา ท้ายนี้ขอให้พี่มีสุขภาพแข็งแรงเหมือนช่วงแรกๆที่มาทำงาน หรือถ้าไม่ไหวยังไงก็เปลี่ยนงานครับ 5555! ไว้เจอกันใหม่นะครับ!",
        series: 'Team Memories',
        imageUrl: "/imgs/team.jpg",
        bgColor: 'bg-white'
      }
    ]
  },
  { 
    id: '6', 
    name: 'พี่เอิร์น', 
    icon: 'taunt', 
    color: 'from-cyan-400 to-blue-600', 
    isLocked: true,
    cards: [
      {
        id: 'c11',
        type: 'illustration',
        title: 'Thank you for everything.',
        series: 'Team Memories',
        imageUrl: "/imgs/b1.jpg",
        bgColor: 'bg-card-cream'
      },
      {
        id: 'c12',
        type: 'photo',
        recipient: 'พี่เอิร์น',
        author: 'จากน้องบั๊มสุดหล่อ',
        message: "พี่เอิร์นสุดสวยและสุดเฟี้ยวที่สุดในบริษัท สำหรับพี่เอิร์นคือพี่เป็นคนที่มองโลกในแบบโลกที่สดใสมากถึงแม้ในออฟฟิศจะประสาทยังไงพี่ก็สวนกลับได้ของจริงมากครับ บางเรื่องที่ผมไม่ค่อยได้ใส่ใจพี่ก็ยังคอยเตือนผมเสมอ ขอบคุณจริงๆครับ ถึงแม้จะได้ทำงานด้วยกันแค่แปปเดียวแต่ก็รู้สึกว่าทำงานกับพี่แล้วสนุกมากครับ สุดท้ายนี้ขอให้พี่เอิร์นมีความสุขมากๆนะครับ โชคดีกับการเดินทางครั้งใหม่ครับ!",
        series: 'Team Memories',
        imageUrl: "/imgs/team.jpg",
        bgColor: 'bg-white'
      }
    ]
  },
  { 
    id: '7', 
    name: 'พี่ซินดี้', 
    icon: 'support_agent', 
    color: 'from-emerald-400 to-green-600', 
    isLocked: true,
    cards: [
      {
        id: 'c13',
        type: 'illustration',
        title: 'Thank you for everything.',
        series: 'Team Memories',
        imageUrl: "/imgs/b1.jpg",
        bgColor: 'bg-card-cream'
      },
      {
        id: 'c14',
        type: 'photo',
        recipient: 'พี่ซินดี้',
        author: 'จากน้องบั๊มสุดหล่อ',
        message: "ขอบคุณพี่ซินมากๆครับ กับการที่ตามตัวผมมาทำงานจากบ้านที่อยู่อุบลเลยแน่ะ มาตั้งไกล ขอบคุณที่ให้โอกาสผมได้ทำงานที่นี่นะครับ ขอให้พี่มีสุขภาพแข็งแรง ไม่เศร้าไม่อกหักทิพย์ มีความสุขมากๆนะครับ ไว้มีโอกาสได้เจอกันใหม่นะครับ!",
        series: 'Team Memories',
        imageUrl: "/imgs/team.jpg",
        bgColor: 'bg-white'
      }
    ]
  },
  { 
    id: '8', 
    name: 'พี่วิทย์', 
    icon: 'sentiment_extremely_dissatisfied', 
    color: 'from-rose-400 to-red-600', 
    isLocked: true,
    cards: [
      {
        id: 'c15',
        type: 'illustration',
        title: 'Thank you for everything.',
        series: 'Team Memories',
        imageUrl: "/imgs/b1.jpg",
        bgColor: 'bg-card-cream'
      },
      {
        id: 'c16',
        type: 'photo',
        recipient: 'พี่วิทย์',
        author: 'จากน้องบั๊มสุดหล่อ',
        message: "สำหรับพี่วิทย์ ขอบคุณพี่วิทย์มากๆเลยนะครับสำหรับคำแนะนำดีๆ ช่วงแรกที่เข้ามาทำงานพี่ดูแลผมดีมากๆเลยครับ สอนและแนะนำอะไรหลายๆอย่างให้ผม ขอบคุณมากๆครับ ขอบคุณสำหรับประสบการณ์ดีๆที่มอบให้ผมนะครับ แล้วก็พี่เต้ก็เป็นกันเองมากๆ ขอให้พี่กับพี่เต้มีความสุขมากๆนะครับ อะไรใจเย็นได้ก็ใจเย็นๆนะครับ 5555!",
        series: 'Team Memories',
        imageUrl: "/imgs/team.jpg",
        bgColor: 'bg-white'
      }
    ]
  },
];
