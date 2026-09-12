import { ServiceItem, ConditionCategory, FaqItem } from '../types';

export const CLINIC_INFO = {
  name: 'Dr. Rana Fida Hussain Physiotherapy Clinic',
  doctorName: 'Dr. Rana Fida Hussain',
  doctorTitle: 'Consultant Physiotherapist',
  doctorImage: '/doctor-rana-fida-hussain.jpg',
  phone: '0335 4199317',
  phoneInternational: '+923354199317',
  whatsappUrl: 'https://wa.me/923354199317',
  locationShort: 'Sialkot, Pakistan',
  addressFull: 'Allama Iqbal children hospital, Commissioner Rd, opposite to civil hospital, Muhammadpura, Sialkot, 51300, Pakistan',
  landmark: 'Opposite to Civil Hospital, Commissioner Road',
  city: 'Sialkot',
  postalCode: '51300',
  country: 'Pakistan',
  email: 'info@drranafida-physio.pk',
  mapsUrl: 'https://www.google.com/maps/place/Dr+Fida+Hussain+physiotherapy+centre/@32.5029072,74.5443645,17z/data=!4m6!3m5!1s0x391eeb11bac90feb:0xc5fb905b67ea52d3!8m2!3d32.5028897!4d74.5466892!16s%2Fg%2F11nhqygl4j',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=32.5028897,74.5466892+(Dr+Fida+Hussain+physiotherapy+centre)&t=&z=16&ie=UTF8&iwloc=B&output=embed',
  coordinates: {
    lat: 32.5028897,
    lng: 74.5466892,
  },
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
  },
  operatingHours: [
    { days: 'Monday – Saturday', hours: '10:00 AM – 8:00 PM' },
    { days: 'Sunday', hours: 'Special / Emergency Appointments by Prior Notice' },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'pediatric-physiotherapy',
    title: 'Pediatric Physiotherapy',
    category: 'specialized',
    shortDesc: 'Gentle, child-friendly care for infants and children with developmental delays, weakness, imbalance and movement difficulties.',
    fullDesc: 'Dedicated pediatric physiotherapy adapted to your child’s unique developmental age, muscle tone, and motor goals. Our compassionate clinical approach helps children build essential posture control, motor coordination, and functional confidence.',
    clinicalFocus: [
      'Developmental delays & delayed motor milestones',
      'Cerebral palsy & neuromuscular support',
      'Congenital torticollis & head tilt',
      'Toe walking & pediatric gait variations',
      'Poor neck control, sitting, and standing difficulties',
    ],
    icon: 'Baby',
    image: '/services/pediatric-physiotherapy.jpg',
  },
  {
    id: 'sports-rehabilitation',
    title: 'Sports Rehabilitation',
    category: 'specialized',
    shortDesc: 'Evidence-based rehabilitation for sports injuries and structured return-to-training and return-to-play progression.',
    fullDesc: 'Customized athletic rehabilitation protocols designed to rebuild biomechanical strength, joint stability, neuromuscular agility, and mental confidence following acute or overuse sports injuries.',
    clinicalFocus: [
      'Ligament sprains & muscle strain recovery',
      'ACL and knee stability rehabilitation',
      'Rotator cuff & shoulder overload protocols',
      'Biomechanical movement assessment',
      'Graded return-to-play criteria & conditioning',
    ],
    icon: 'Activity',
    image: '/services/sports-rehabilitation.jpg',
  },
  {
    id: 'chronic-pain-management',
    title: 'Chronic Pain Management',
    category: 'core',
    shortDesc: 'Support for long-standing pain involving the spine, joints and muscles with emphasis on movement, function and quality of life.',
    fullDesc: 'Long-term musculoskeletal discomfort requires an individualized, movement-first approach. We target root biomechanical factors rather than temporary masking, restoring everyday ease and functional independence.',
    clinicalFocus: [
      'Persistent spinal and lumbar strain',
      'Degenerative joint discomfort & osteoarthritis',
      'Myofascial trigger points & muscle tension',
      'Postural ergonomics & gentle movement re-education',
      'Safe activity pacing & physical resilience',
    ],
    icon: 'ShieldCheck',
    image: '/services/chronic-pain-management.jpg',
  },
  {
    id: 'hijama-cupping-therapy',
    title: 'Hijama / Cupping Therapy',
    category: 'specialized',
    shortDesc: 'Traditional wet and dry cupping when clinically appropriate as part of an overall patient-centered treatment approach.',
    fullDesc: 'Administered under rigorous clinical sanitation and strict hygienic standards by Dr. Rana Fida Hussain. Cupping therapy is selected thoughtfully to stimulate localized circulation, relieve deep myofascial tension, and complement manual rehabilitation.',
    clinicalFocus: [
      'Dry myofascial decompression cupping',
      'Clinical wet cupping (Hijama) with sterile protocols',
      'Muscle stiffness & persistent back tightness',
      'Localized blood flow promotion',
      'Complementary integration with exercise therapy',
    ],
    icon: 'Sparkles',
    image: '/services/hijama-cupping-therapy.jpg',
  },
  {
    id: 'post-surgical-rehabilitation',
    title: 'Post-Surgical Rehabilitation',
    category: 'rehabilitation',
    shortDesc: 'Structured rehabilitation to regain strength, mobility and confidence following surgery.',
    fullDesc: 'Phase-based post-operative physiotherapy coordinated safely around tissue healing timelines. From early gentle range-of-motion to progressive load-bearing, we help patients safely return to independent living.',
    clinicalFocus: [
      'Post-orthopedic surgery (fractures, joint replacements)',
      'Spine post-surgical mobilization',
      'Scar tissue management & joint stiffness prevention',
      'Progressive muscle strengthening',
      'Functional ambulation and balance training',
    ],
    icon: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'home-physiotherapy',
    title: 'Home Physiotherapy',
    category: 'specialized',
    shortDesc: 'Convenient physiotherapy services at home in Sialkot for patients who have difficulty traveling or prefer home-based treatment.',
    fullDesc: 'Comprehensive clinical care delivered directly to patients’ residences across Sialkot. Ideal for elderly individuals, post-surgical recovery, severe mobility limitations, or families with pediatric care needs.',
    clinicalFocus: [
      'Dedicated home visits throughout Sialkot',
      'Bedside mobility and transfer training',
      'Home environment ergonomic & safety assessment',
      'Post-stroke home recovery support',
      'Family and caregiver exercise guidance',
    ],
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'back-pain-rehabilitation',
    title: 'Back Pain Rehabilitation',
    category: 'core',
    shortDesc: 'Assessment of posture, movement and physical function with a structured rehabilitation plan.',
    fullDesc: 'In-depth assessment of lumbar and thoracic mechanics, core stabilizing muscles, and daily ergonomics to address sciatica, disc issues, and chronic lower back tightness.',
    clinicalFocus: [
      'Lumbar disc herniation & nerve root irritation',
      'Sciatica & radiating leg discomfort',
      'Postural spinal re-alignment exercises',
      'Core stabilization & spinal endurance',
      'Safe lifting and occupational ergonomics',
    ],
    icon: 'Activity',
    image: '/services/back-pain-rehabilitation.jpg',
  },
  {
    id: 'knee-rehabilitation',
    title: 'Knee Rehabilitation',
    category: 'core',
    shortDesc: 'Strengthening, balance and functional rehabilitation for knee pain and mobility limitations.',
    fullDesc: 'Targeted protocols for patellofemoral pain, ligament strains, meniscus recovery, and knee osteoarthritis to restore smooth gait, stair-climbing ease, and joint shock absorption.',
    clinicalFocus: [
      'Quadriceps and hamstring balanced strengthening',
      'Patellar tracking & joint mobility',
      'Osteoarthritis conservative management',
      'Proprioception and dynamic balance training',
      'Gait retraining and weight distribution',
    ],
    icon: 'ShieldCheck',
    image: '/services/knee-rehabilitation.jpg',
  },
  {
    id: 'shoulder-rehabilitation',
    title: 'Shoulder Rehabilitation',
    category: 'core',
    shortDesc: 'Progressive rehabilitation for shoulder pain, stiffness, injury and movement limitations.',
    fullDesc: 'Focused care for frozen shoulder (adhesive capsulitis), rotator cuff tendinopathy, impingement, and bursitis to reclaim overhead reach, sleeping comfort, and fluid arm rotation.',
    clinicalFocus: [
      'Frozen shoulder staged mobilization',
      'Rotator cuff strengthening & scapular stability',
      'Shoulder impingement decompression exercises',
      'Overhead sports movement mechanics',
      'Pain-free range-of-motion recovery',
    ],
    icon: 'HeartPulse',
    image: '/services/shoulder-rehabilitation.jpg',
  },
];

export const CONDITIONS_DATA: ConditionCategory[] = [
  {
    id: 'pediatric-developmental',
    title: 'Pediatric & Developmental',
    description: 'Specialized therapeutic interventions for infants and young children experiencing motor delays or neurological movement challenges.',
    items: [
      {
        name: 'Cerebral Palsy',
        details: 'Neuromuscular condition affecting muscle tone, posture, and coordination.',
        physioRole: 'Focused motor re-education, muscle lengthening, joint mobility preservation, and functional milestone training tailored to each child.',
      },
      {
        name: 'Developmental Delay',
        details: 'Slower progress in achieving standard early childhood physical and motor capabilities.',
        physioRole: 'Structured sensory-motor stimulation and guided progression through developmental stages.',
      },
      {
        name: 'Delayed Milestones',
        details: 'Delays in key stages such as rolling, crawling, sitting upright, or walking.',
        physioRole: 'Play-based motor facilitation encouraging natural movement patterns and balance responses.',
      },
      {
        name: 'Toe Walking',
        details: 'Persistent walking on the balls of the feet beyond the typical toddler exploration stage.',
        physioRole: 'Calf muscle lengthening, ankle joint mobilization, and heel-strike sensory gait retraining.',
      },
      {
        name: 'Walking / Gait Disorders',
        details: 'Asymmetrical gait, balance instability, in-toeing, or frequent falls in growing children.',
        physioRole: 'Biomechanical gait analysis, lower limb strengthening, and balance alignment exercises.',
      },
      {
        name: 'Torticollis',
        details: 'Tightness or shortening of neck muscles (sternocleidomastoid) causing involuntary head tilt.',
        physioRole: 'Gentle passive stretching, active neck rotation positioning, and parental handling education.',
      },
      {
        name: 'Poor Neck Control',
        details: 'Difficulty holding the head steady in midline during prone or upright positions.',
        physioRole: 'Cervical extensor and postural muscle activation through supported positioning.',
      },
      {
        name: 'Difficulty Sitting',
        details: 'Inability to maintain trunk stability or sit unsupported at expected age.',
        physioRole: 'Core postural facilitation, pelvic alignment, and protective balance reactions.',
      },
      {
        name: 'Difficulty Standing',
        details: 'Weakness or lack of weight-bearing tolerance in lower extremities.',
        physioRole: 'Graded weight-bearing exercises, joint approximation, and supported standing progression.',
      },
    ],
  },
  {
    id: 'musculoskeletal-pain',
    title: 'Musculoskeletal & Pain',
    description: 'Targeted assessment and rehabilitation for spinal, joint, and soft tissue conditions across all age groups.',
    items: [
      {
        name: 'Muscular Pain',
        details: 'Acute or chronic muscle spasms, myofascial trigger points, and strain.',
        physioRole: 'Targeted soft tissue release, therapeutic stretching, and posture re-education.',
      },
      {
        name: 'Joint Pain',
        details: 'Stiffness, inflammation, or wear-and-tear discomfort in peripheral or spinal joints.',
        physioRole: 'Joint mobilization techniques, surrounding muscle strengthening, and joint preservation advice.',
      },
      {
        name: 'Knee Pain',
        details: 'Patellofemoral strain, meniscus sensitivity, osteoarthritis, or overuse irritation.',
        physioRole: 'Quadriceps balancing, biomechanical alignment, and graded low-impact conditioning.',
      },
      {
        name: 'Back Pain',
        details: 'Lumbar strain, postural muscle fatigue, and mechanical spinal stiffness.',
        physioRole: 'Spinal decompression exercises, deep core muscle retraining, and ergonomic guidance.',
      },
      {
        name: 'Spine Conditions',
        details: 'Thoracic stiffness, scoliosis posture management, and cervical spine tension.',
        physioRole: 'Segmental spinal mobility, posture correction, and scapular stabilization.',
      },
      {
        name: 'Sciatica',
        details: 'Nerve irritation causing shooting discomfort down the buttock, thigh, and calf.',
        physioRole: 'Neural mobilization flossing, lumbar offloading positions, and pelvic stabilizing drills.',
      },
      {
        name: 'Disc Herniation',
        details: 'Intervertebral disc bulge or extrusion compromising adjacent neural structures.',
        physioRole: 'Directional preference therapy, gentle traction, and core muscle protection routines.',
      },
      {
        name: 'Frozen Shoulder',
        details: 'Adhesive capsulitis characterized by profound stiffness and progressive loss of shoulder motion.',
        physioRole: 'Staged capsular stretching, gentle joint glide mobilization, and functional arm rehab.',
      },
      {
        name: 'Coccydynia',
        details: 'Localized pain in the tailbone area made worse with sitting or rising.',
        physioRole: 'Pelvic floor relaxation techniques, ergonomic sitting adjustments, and gentle sacral mobilization.',
      },
    ],
  },
  {
    id: 'neurological-rehabilitation',
    title: 'Neurological Rehabilitation',
    description: 'Evidence-informed neuro-rehabilitation focused on neuroplasticity, mobility restoration, and functional independence.',
    items: [
      {
        name: 'Stroke Rehabilitation',
        details: 'Motor weakness, hemiparesis, and loss of functional mobility following a cerebrovascular event.',
        physioRole: 'Neuro-facilitation, weight-bearing, gait re-education, upper limb recovery, and fall prevention.',
      },
      {
        name: 'Bell’s Palsy',
        details: 'Sudden weakness or paralysis of the facial muscles due to seventh cranial nerve inflammation.',
        physioRole: 'Facial muscle neuromuscular re-education, gentle manual release, and symmetry exercises.',
      },
      {
        name: 'Mobility Difficulties',
        details: 'General loss of balance, coordination, or transfer ability caused by neurological conditions.',
        physioRole: 'Functional mobility circuits, transfer mechanics, and assistive device prescription if needed.',
      },
      {
        name: 'Gait Problems',
        details: 'Neurological gait alterations such as foot drop, ataxia, or shuffling steps.',
        physioRole: 'Rhythmic gait training, step clearance exercises, and dynamic balance conditioning.',
      },
    ],
  },
  {
    id: 'sports-injury',
    title: 'Sports & Injury',
    description: 'Specialized sports injury recovery designed to return athletes safely to performance with reduced re-injury risk.',
    items: [
      {
        name: 'Sports Injuries',
        details: 'Acute ligament tears, muscle strains, tendonitis, and joint sprains sustained during training or matches.',
        physioRole: 'Early acute management, swelling resolution, tissue healing protection, and active rehabilitation.',
      },
      {
        name: 'Return-to-Play Rehabilitation',
        details: 'The crucial transitional phase between clinical healing and competitive athletic readiness.',
        physioRole: 'Sport-specific drills, agility testing, plyometrics, and psychological confidence building.',
      },
      {
        name: 'Post-Injury Weakness',
        details: 'Muscle atrophy, neuromuscular inhibition, and protective guarding after trauma.',
        physioRole: 'Progressive overload strength training, eccentric strengthening, and kinetic chain integration.',
      },
      {
        name: 'Mobility Restrictions',
        details: 'Joint capsular tightness, scar tissue adhesion, and loss of athletic range-of-motion.',
        physioRole: 'Targeted dynamic mobility, myofascial release, and joint mobility maintenance routines.',
      },
    ],
  },
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'Do you provide pediatric physiotherapy?',
    answer:
      'Yes. Dr. Rana Fida Hussain has a dedicated special interest in Pediatric Physiotherapy. We provide gentle, child-friendly care for infants, toddlers, and older children facing developmental delays, delayed milestones, cerebral palsy, torticollis, toe walking, and balance challenges in Sialkot.',
  },
  {
    question: 'Do you offer home physiotherapy?',
    answer:
      'Yes. We offer convenient Home Physiotherapy services throughout Sialkot for patients who experience mobility challenges, elderly individuals, post-surgical patients, or families who prefer the convenience of home-based rehabilitation.',
  },
  {
    question: 'Do you treat sports injuries?',
    answer:
      'Yes. Sports rehabilitation is one of Dr. Rana Fida Hussain’s primary special interests. We treat acute sprains, muscle strains, tendonitis, knee/shoulder injuries, and provide structured return-to-play progression protocols for competitive athletes and active individuals.',
  },
  {
    question: 'Do you provide post-surgical rehabilitation?',
    answer:
      'Yes. We offer structured post-operative physiotherapy programs tailored to the specific surgery and surgeon’s protocol—including joint replacement recovery, fracture fixation rehab, and spinal surgery rehabilitation to safely rebuild strength and range of motion.',
  },
  {
    question: 'What should I bring to my first appointment?',
    answer:
      'Please bring any relevant previous medical records, diagnostic imaging reports (such as X-rays or MRI scans if available), a list of current medications, and wear comfortable, loose clothing that allows easy physical movement and assessment of the affected joint or area.',
  },
  {
    question: 'How can I contact the clinic?',
    answer:
      'You can contact Dr. Rana Fida Hussain Physiotherapy Clinic by calling 0335 4199317, sending a WhatsApp message directly to 0335 4199317, or filling out the appointment request form on our website. Our clinic is located at Allama Iqbal Children Hospital, Commissioner Rd, opposite Civil Hospital, Muhammadpura, Sialkot.',
  },
];

export const TRUST_POINTS = [
  {
    title: 'Personalized Treatment',
    desc: 'Care plans designed around your individual assessment, goals, and lifestyle.',
  },
  {
    title: 'Child-Friendly Care',
    desc: 'Gentle, reassuring environment tailored to the developmental needs of children.',
  },
  {
    title: 'Sports Rehabilitation',
    desc: 'Evidence-based protocols to help athletes rebuild strength, stability, and speed.',
  },
  {
    title: 'Functional Recovery',
    desc: 'Emphasis on restoring natural movement, independence, and long-term joint health.',
  },
  {
    title: 'Home Physiotherapy',
    desc: 'Professional treatment brought directly to your home in Sialkot when travel is difficult.',
  },
  {
    title: 'Patient-Centered Approach',
    desc: 'Clear communication, compassionate guidance, and ongoing support throughout recovery.',
  },
];

export const TREATMENT_PROCESS = [
  {
    step: '01',
    title: 'Assessment',
    desc: 'Comprehensive evaluation of joint movement, muscle strength, posture, and functional limitations.',
  },
  {
    step: '02',
    title: 'Treatment Planning',
    desc: 'Formulation of a clear, individualized therapy roadmap aligned with realistic recovery goals.',
  },
  {
    step: '03',
    title: 'Guided Rehabilitation',
    desc: 'Hands-on clinical treatment, targeted corrective exercises, and progressive movement training.',
  },
  {
    step: '04',
    title: 'Progress Monitoring',
    desc: 'Regular re-evaluations, home guidance reinforcement, and phased progression back to full function.',
  },
];
