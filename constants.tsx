
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
        imageUrl: "/imgs/chair.JPG",
        bgColor: 'bg-card-cream'
      },
      {
        id: 'c2',
        type: 'photo',
        recipient: 'พี่จิน',
        author: 'น้องบั๊มสุดหล่อ',
        message: "ขอบคุณพี่จินมากๆ เลยนะครับสำหรับคำแนะนำดีๆ และความเป็นกันเองที่มีให้น้องๆ เสมอมา ขอให้พี่จินโชคดีกับเส้นทางใหม่นะครับ!",
        series: 'Team Memories',
        imageUrl: "/imgs/Team.JPG",
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
        imageUrl: "/imgs/b1.JPG",
        bgColor: 'bg-card-cream'
      },
      {
        id: 'c4',
        type: 'photo',
        recipient: 'พี่บูม',
        author: 'น้องบั๊มสุดหล่อ',
        message: "ขอบคุณพี่บูมมากๆ เลยนะครับสำหรับคำแนะนำดีๆ และความเป็นกันเองที่มีให้น้องๆ เสมอมา ขอให้พี่บูมโชคดีกับเส้นทางใหม่นะครับ!",
        series: 'Team Memories',
        imageUrl: "/imgs/Team.JPG",
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
        imageUrl: "/imgs/b1.JPG",
        bgColor: 'bg-card-cream'
      },
      {
        id: 'c6',
        type: 'photo',
        recipient: 'พี่ดิววี่',
        author: 'น้องบั๊มสุดหล่อ',
        message: "ขอบคุณพี่ดิววี่มากๆ เลยนะครับสำหรับคำแนะนำดีๆ และความเป็นกันเองที่มีให้น้องๆ เสมอมา ขอให้พี่ดิววี่โชคดีกับเส้นทางใหม่นะครับ!",
        series: 'Team Memories',
        imageUrl: "/imgs/Team.JPG",
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
        imageUrl: "/imgs/b1.JPG",
        bgColor: 'bg-card-cream'
      },
      {
        id: 'c8',
        type: 'photo',
        recipient: 'พี่เบนซ์',
        author: 'น้องบั๊มสุดหล่อ',
        message: "ขอบคุณพี่เบนซ์มากๆ เลยนะครับสำหรับคำแนะนำดีๆ และความเป็นกันเองที่มีให้น้องๆ เสมอมา ขอให้พี่เบนซ์โชคดีกับเส้นทางใหม่นะครับ!",
        series: 'Team Memories',
        imageUrl: "/imgs/Team.JPG",
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
        imageUrl: "/imgs/b1.JPG",
        bgColor: 'bg-card-cream'
      },
      {
        id: 'c10',
        type: 'photo',
        recipient: 'พี่เพชร',
        author: 'น้องบั๊มสุดหล่อ',
        message: "ขอบคุณพี่เพชรมากๆ เลยนะครับสำหรับคำแนะนำดีๆ และความเป็นกันเองที่มีให้น้องๆ เสมอมา ขอให้พี่เพชรโชคดีกับเส้นทางใหม่นะครับ!",
        series: 'Team Memories',
        imageUrl: "/imgs/Team.JPG",
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
        imageUrl: "/imgs/b1.JPG",
        bgColor: 'bg-card-cream'
      },
      {
        id: 'c12',
        type: 'photo',
        recipient: 'พี่เอิร์น',
        author: 'น้องบั๊มสุดหล่อ',
        message: "ขอบคุณพี่เอิร์นมากๆ เลยนะครับสำหรับคำแนะนำดีๆ และความเป็นกันเองที่มีให้น้องๆ เสมอมา ขอให้พี่เอิร์นโชคดีกับเส้นทางใหม่นะครับ!",
        series: 'Team Memories',
        imageUrl: "/imgs/Team.JPG",
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
        imageUrl: "/imgs/b1.JPG",
        bgColor: 'bg-card-cream'
      },
      {
        id: 'c14',
        type: 'photo',
        recipient: 'พี่ซินดี้',
        author: 'น้องบั๊มสุดหล่อ',
        message: "ขอบคุณพี่ซินดี้มากๆ เลยนะครับสำหรับคำแนะนำดีๆ และความเป็นกันเองที่มีให้น้องๆ เสมอมา ขอให้พี่ซินดี้โชคดีกับเส้นทางใหม่นะครับ!",
        series: 'Team Memories',
        imageUrl: "/imgs/Team.JPG",
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
        imageUrl: "/imgs/b1.JPG",
        bgColor: 'bg-card-cream'
      },
      {
        id: 'c16',
        type: 'photo',
        recipient: 'พี่วิทย์',
        author: 'น้องบั๊มสุดหล่อ',
        message: "ขอบคุณพี่วิทย์มากๆ เลยนะครับสำหรับคำแนะนำดีๆ และความเป็นกันเองที่มีให้น้องๆ เสมอมา ขอให้พี่วิทย์โชคดีกับเส้นทางใหม่นะครับ!",
        series: 'Team Memories',
        imageUrl: "/imgs/Team.JPG",
        bgColor: 'bg-white'
      }
    ]
  },
];
