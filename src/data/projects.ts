export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  features?: string[];
  technologies: string[];
  category: string;
  images?: string[];
  videos?: string[];
}

export const categories = ['All', 'IoT', 'AI/ML', 'Web', 'Electronics'];

export const projects: Project[] = [
  {
    id: 'smart-anti-theft-bag',
    title: 'Smart Anti-Theft Bag',
    shortDescription: 'ESP8266-based bag with RFID access and Telegram alerts for real-time theft detection.',
    fullDescription: [
      "The Smart Anti-Theft Bag is a compact, IoT-powered backpack that improves personal security using RFID authentication and real-time Telegram alerts. Built using an ESP8266 microcontroller, the system ensures that only authorized users can access the bag's contents.",

      "When the bag's zipper is opened, a 5-second timer starts. If no valid RFID card is scanned during this time, a buzzer sounds and a Telegram alert is sent. If the RFID scan is valid, the alarm remains off and access is granted.",
      
      "This project uses an MFRC522 RFID reader, a piezo buzzer, a physical switch for zipper detection, and Wi-Fi-enabled cloud messaging via Telegram's Bot API. The logic was programmed using the Arduino IDE with ESP8266 libraries.",
      
      "Key design considerations included timing precision, network reliability, and power optimization. The hardware is compact enough to fit inside any standard backpack."
    ],
    technologies: ['ESP8266', 'RFID MFRC522', 'Telegram Bot API', 'Arduino IDE', 'Piezo Buzzer'],
    category: 'IoT',
    videos: ['/videos/BEGV7712.MP4']
    
  },
  {
    id: 'ai-powered-esp32',
    title: 'AI-Powered ESP32',
    shortDescription: 'ESP32-AI system integrated with Gemini AI to respond to questions asked.',
    fullDescription: [
      "This project demonstrates the integration of the ESP32 with Google Gemini AI to create an interactive AI-powered assistant. The ESP32 sends user input to the Gemini API, receives intelligent responses, and then converts them into natural-sounding speech using Text-to-Speech (TTS).",
      "The system combines AI conversation with real-time audio output, allowing users to experience voice-based interaction without needing a computer or cloud-heavy setup. It works as a lightweight, portable smart assistant built on embedded hardware.",
      "Potential applications include smart home voice assistants, accessibility tools for visually impaired users, educational companions, and IoT devices that respond with speech."
    ],
    technologies: ['ESP32', 'Google Gemini AI', 'Text-to-Speech', 'Arduino IDE', 'Wi-Fi'],
    category: 'AI/ML',
    videos: ['/videos/ESP32-AI1.mp4','/videos/ESP32-AI2.mp4']
  },
  {
  id: 'ollama-local-ai',
  title: 'OLLAMA based local AI',
  shortDescription: 'Local AI on ESP32 using OLLAMA local on PC and forwarded to ESP32',
  fullDescription: [
    "This project showcases a powerful integration between the ESP32 and Ollama — a local LLM engine running on a computer. The ESP32 sends a prompt to the Ollama server through an ngrok-exposed endpoint and receives the generated AI response directly on the microcontroller.",
    "This allows the ESP32 to communicate with advanced language models like LLaMA, Phi, Mistral, and Gemma without relying on cloud services. The system works completely over local hardware, making it fast, private, and ideal for embedded AI applications.",
    "With this setup, the ESP32 becomes a lightweight AI-enabled device capable of sending queries, controlling responses, and interacting with local LLMs.",
    "This project demonstrates how compact IoT boards like the ESP32 can be used for advanced AI tasks while maintaining data privacy and reducing latency."
  ],
  features: ['Ngrok to expose the Ollama API', 'HTTP-based request/response system', 'ESP32 for sending prompt data', 'Any Ollama-supported AI model'],
  technologies: ['ESP32', 'Ollama', 'LLaMA/Phi/Mistral', 'Ngrok', 'HTTP API'],
  category: 'AI/ML',
  images: [
    '/videos/OLLAMA.jpeg',
    '/videos/OUTPUT.jpeg',
    '/videos/NGROK.jpeg'
  ]
},

  {
    id: 'klvora-fashion',
    title: 'Klvora - Fashion Website',
    shortDescription: 'Modern fashion website built with React, Neon DBMS, featuring dynamic products and automated email workflows.',
    fullDescription: [
      "Klvora is a modern fashion e-commerce website built with React and powered by Neon DBMS for dynamic product management.",
      "The website features automated email workflows for customer engagement, a sleek responsive design, and seamless user experience.",
      "Key features include dynamic product catalog, user authentication, and integration with modern web technologies."
    ],
    technologies: ['React', 'Neon DBMS', 'Node.js', 'Email Automation', 'Tailwind CSS'],
    category: 'Web',
    videos: ['/videos/klvora.mp4']
  },
  {
    id: 'personal-ai-bot',
    title: 'Personal AI Bot',
    shortDescription: 'Custom-trained bot deployed on web using Botpress to answer questions based on personal data and resume.',
    fullDescription: [
      "This project is a personalized AI bot trained on my resume and portfolio details. Built using Botpress and OpenAI, it allows visitors to ask questions like: 'What are Karthik's skills?', 'Tell me about his projects in IoT.', 'Where did he study?'",
      "The bot is hosted online and trained with FAQs, resume content, and personalized replies using knowledge base integration. It can be used by recruiters, visitors, or collaborators to quickly understand my background and capabilities.",
      "Future improvements include analytics on bot usage, voice assistant capability, and multilingual responses."
    ],
    features: ['Botpress-based no-code visual flow setup', 'Custom knowledge base from PDF/resume', 'OpenAI GPT integration', 'Deployed and embeddable on any page'],
    technologies: ['Botpress', 'OpenAI GPT', 'Knowledge Base', 'Web Embedding'],
    category: 'AI/ML',
        images: [
    '/videos/bot.png','/videos/bot2.png'],
  },
  {
    id: 'helmet-detection',
    title: 'Helmet & Triple-Ride Detection',
    shortDescription: 'YOLO and CNN-based system to detect helmet use and triple riding using real-time camera feed.',
    fullDescription: [
      "This project uses deep learning (YOLOv5 + CNN) to detect motorcyclists violating traffic rules—specifically those not wearing helmets or riding with more than two passengers.",
      "The system is trained on a custom dataset and deployed on a system capable of processing live video feed from a roadside camera. Once a violation is detected, it highlights the rider and extracts the number plate for logging.",
      "The detection model is optimized for accuracy and real-time performance using OpenCV and PyTorch."
    ],
    technologies: ['YOLOv5', 'CNN', 'OpenCV', 'PyTorch', 'Python'],
    category: 'AI/ML',
    videos: ['/videos/helmet.mp4',]
    
  },
  {
    id: 'smart-home-automation',
    title: 'Smart Home Automation',
    shortDescription: 'Control appliances via Alexa and Cadio App using ESP8266 and custom firmware.',
    fullDescription: [
      "This smart home automation system uses ESP8266 to wirelessly control appliances like lights and fans. The system is integrated with Alexa using Sinric Pro, enabling voice-controlled operation for daily convenience.",
      "Commands like 'turn on light' or 'switch off fan' are recognized by Alexa and executed by the ESP8266 microcontroller through relay modules. A web dashboard allows remote control even without voice input.",
      "Key features include support for multiple devices, real-time feedback on device status, and integration with existing home switches.",
      "The system uses secure APIs from Sinric Pro for communication and is coded using the Arduino IDE with Wi-Fi and relay libraries.",
      "Practical applications include elderly care, home security, energy saving, and automation of routine tasks. The hardware is compact and non-invasive, allowing easy installation in any existing home wiring system."
    ],
    technologies: ['ESP8266', 'Alexa', 'Sinric Pro', 'Relay Modules', 'Arduino IDE'],
    category: 'IoT',
    videos: ['/videos/room.mp4']
  },
  {
    id: 'environmental-monitoring',
    title: 'Environmental Monitoring',
    shortDescription: 'Real-time web dashboard showing temperature, humidity, and air quality.',
    fullDescription: [
      "This project features a smart environmental monitoring system powered by an ESP8266 microcontroller and DHT11 sensor to track temperature and humidity. It collects and displays real-time data on a custom-designed webpage hosted via Wi-Fi.",
      "The data is auto-refreshed every few seconds and color-coded based on safe or unsafe ranges. This makes it ideal for monitoring rooms, server racks, greenhouses, and remote weather stations.",
      "The design uses HTML, CSS, and JavaScript for the web interface and the Arduino IDE for the firmware. It includes a simple REST API interface for data retrieval, allowing other systems or mobile apps to integrate easily.",
      "The hardware is low-power and uses micro-USB or battery input, making it great for portable or solar-powered setups. The dashboard is hosted directly on the ESP8266 and loads instantly without needing any cloud support.",
      "This project demonstrates my ability to integrate sensors, handle real-time web communication, and build embedded UIs."
    ],
    technologies: ['ESP8266', 'DHT11', 'HTML/CSS/JS', 'REST API', 'Arduino IDE'],
    category: 'IoT',
    images: [
    '/videos/moni1.jpg','/videos/moni2.jpg','/videos/moni3.jpg']
  },
  {
    id: 'smart-calling-bell',
    title: 'Smart Calling Bell System',
    shortDescription: 'ESP32-based calling bell with buzzer, Blynk Application, and visitor presence notification.',
    fullDescription: [
      "The Smart Calling Bell System uses an ESP32 microcontroller and Blynk app to notify home occupants when a visitor presses the bell. A piezo buzzer generates a doorbell sound, and the person at the door appears in the Blynk interface.",
      "This project ensures that even in noisy environments or when headphones are worn, the presence of a visitor isn't missed. It can also be expanded to send mobile alerts or integrate with a camera.",
      "The system uses digital input from a tactile push button, which triggers both sound output and display update logic.",
      "It is compact and suitable for smart homes, offices, and accessible homes for the elderly or hearing impaired.",
      "Built with Arduino IDE and ESP32 libraries, it's reliable, power-efficient, and has OTA update support."
    ],
    technologies: ['ESP32', 'Blynk', 'Piezo Buzzer', 'Arduino IDE', 'OTA Updates'],
    category: 'IoT',
    images: [
    '/videos/door.png']
  },
  {
    id: 'audio-spectrum-analyzer',
    title: 'Analog Audio Spectrum Analyzer',
    shortDescription: 'Visualizes audio signals using capacitors, zener diodes, and rectifier diodes without a microcontroller.',
    fullDescription: [
      "A pure analog electronics project that visualizes audio frequency spectrum without any microcontroller.",
      "Uses carefully designed circuits with capacitors, zener diodes, and rectifier diodes to create a visual audio display.",
      "Features LED bar display with real-time response to audio input."
    ],
    technologies: ['Analog Electronics', 'Capacitors', 'Zener Diodes', 'Rectifier Diodes', 'PCB Design'],
    category: 'Electronics',
    videos: ['/videos/sepctrum.mp4']
  },
  {
    id: 'ambient-light-esp',
    title: 'Ambient Light Using ESP',
    shortDescription: 'ESP8266-controlled WLED setup that syncs WS2812 LEDs with screen visuals using SignalRGB.',
    fullDescription: [
      "An immersive ambient lighting system using ESP8266 and WLED firmware to control WS2812 LED strips.",
      "Syncs with screen content through SignalRGB for a dynamic visual experience that enhances gaming and movie watching.",
      "Features customizable effects and real-time screen-reactive lighting."
    ],
    technologies: ['ESP8266', 'WLED', 'WS2812', 'SignalRGB', 'LED Programming'],
    category: 'IoT',
    videos: ['/videos/amb.mp4']
  },
  {
    id: 'travel-guide-app',
    title: 'Travel Guide Web App',
    shortDescription: '"TravelMate" lets users input, save, and organize trip details with an intuitive UI.',
    fullDescription: [
      "TravelMate is a user-friendly web application for trip planning and organization.",
      "Users can input, save, and organize their travel details with an intuitive interface designed for seamless trip management.",
      "Features responsive design and local storage for data persistence."
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'Local Storage', 'UI/UX Design'],
    category: 'Web',
    videos: ['/videos/']
  },
  {
    id: 'esp-joke-generator',
    title: 'ESP Joke Generator',
    shortDescription: 'ESP-based system that fetches jokes and displays them on a 16x2 LCD with a button for the punchline.',
    fullDescription: [
      "A fun IoT project using ESP microcontroller to fetch jokes from an online API and display them on a 16x2 LCD screen.",
      "Features an interactive button to reveal the punchline, making it an entertaining desk companion.",
      "Demonstrates API integration and hardware interface skills."
    ],
    technologies: ['ESP8266', 'LCD 16x2', 'API Integration', 'Arduino IDE', 'C++'],
    category: 'IoT',
    videos: ['/videos/joke-teller-demo.mp4']
  },
  {
    id: 'esp32-desk-mochi',
    title: 'ESP32 Desk Mochi',
    shortDescription: 'ESP32-powered desk companion with time, weather display, and dynamic facial expressions.',
    fullDescription: [
      "An adorable ESP32-powered desk companion that displays time and weather information on an OLED screen.",
      "Features dynamic facial expressions that change based on conditions, adding personality to your workspace.",
      "Compact design perfect for any desk setup."
    ],
    technologies: ['ESP32', 'OLED Display', 'Weather API', 'Animation', 'C++'],
    category: 'IoT',
    videos: ['/videos/mochi.mp4'],
    images: [
    '/videos/mochii.png',]
  }
];