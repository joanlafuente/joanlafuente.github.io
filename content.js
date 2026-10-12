// Personal website content. Edit this file to update your profile.
window.PORTFOLIO = {
  "isTemplate": false,
  "name": "Joan Lafuente Baeza",
  "introductionName": "Joan",
  "initials": "JL",
  "role": "MSc in Data Science",
  "institution": "ETH Zürich",
  "portrait": "assets/portrait.jpeg",
  "email": "jlafuente@student.ethz.ch",
  "github": "https://github.com/joanlafuente",
  "scholar": "https://scholar.google.com/citations?user=BaFoLdUAAAAJ&hl=ca",
  "linkedin": "https://linkedin.com/in/joanlafuente",
  "cv": "",
  "updated": "October 2026",
  "about": [
    "I’m a master’s student in <strong>Data Science at ETH Zürich</strong>. Currently, my research interests lie in <strong>computer vision</strong> and <strong>reinforcement learning</strong>, with an interest in their applications to robotics.",
    "I’m currently working with the <strong>Computer Vision and Geometry Group at ETH Zürich</strong> and the <strong>Gradient Spaces Lab at Stanford</strong>, investigating how large-scale video diffusion models can solve abstract visual reasoning tasks. This work is supported by a <strong>Swiss AI Initiative Small Project compute grant</strong>.",
    "Previously, I completed my bachelor’s in Artificial Intelligence at <strong>Universitat Autònoma de Barcelona</strong>, graduating first in my cohort. I’ve also been a research intern at the <strong>Centre de Visió per Computador</strong> and <strong>Mitek Systems</strong>, working on visual attention, multimodal Transformers, and document forgery detection."
  ],
  "interests": [
    "Computer vision",
    "Generative models",
    "Visual reasoning"
  ],
  "news": [
    {
      "date": "Oct 2026",
      "text": "<a href=\"https://spaceflow3d.github.io/\">SpaceFlow</a> is out: our work introduces training-free 3D generation with local shape and appearance control."
    },
    {
      "date": "Sep 2026",
      "text": "I started as a <strong>teaching assistant</strong> for the Data Science &amp; Machine Learning course at <strong>ETH Zürich</strong>."
    },
    {
      "date": "Feb 2026",
      "text": "I started a research project with the <strong>Computer Vision and Geometry Group at ETH Zürich</strong> and the <strong>Gradient Spaces Lab at Stanford</strong> on video diffusion models for abstract visual reasoning."
    },
    {
      "date": "Nov 2025",
      "text": "I received the <strong>Best Academic Record distinction across all UAB engineering degrees</strong>, awarded to the top four students in 2025."
    },
    {
      "date": "Sep 2025",
      "text": "I started my <strong>master’s in Data Science</strong> at <strong>ETH Zürich</strong>."
    },
    {
      "date": "Jul 2025",
      "text": "I completed my <strong>bachelor’s in Artificial Intelligence</strong> at <strong>Universitat Autònoma de Barcelona</strong>, graduating first in my cohort with an average grade of 9.42/10."
    },
    {
      "date": "Feb 2025",
      "text": "I started a second research internship at the <strong>Centre de Visió per Computador</strong>, supported by the <strong>Elena Maseras Research Fellowship</strong>, working on fixation-guided visual attention."
    },
    {
      "date": "Sep 2024",
      "text": "I joined <strong>Mitek Systems</strong> as a research intern, working on document image forgery detection."
    },
    {
      "date": "Sep 2024",
      "text": "Our paper <a href=\"https://doi.org/10.1007/978-3-031-70552-6_8\">Multimodal Transformer for Comics Text-Cloze</a> was published in the <strong>ICDAR 2024</strong> proceedings and presented <strong>orally</strong> at the conference."
    },
    {
      "date": "Jul 2023",
      "text": "I joined the <strong>Centre de Visió per Computador</strong> for my first research internship, working on multimodal Transformers for comics understanding."
    }
  ],
  "talks": [],
  "research": [
    {
      "title": "Generative visual reasoning",
      "text": "Investigating large-scale video diffusion models for abstract visual reasoning, with distributed multi-GPU training in PyTorch."
    },
    {
      "title": "Guided 3D generation",
      "text": "Exploring part-wise spatial and appearance guidance for 3D generation."
    },
    {
      "title": "Attention & multimodal learning",
      "text": "Learning fixation-guided visual attention with reinforcement learning and Transformers, and multimodal representations for comics."
    }
  ],
  "publications": [
    {
      "id": "spaceflow",
      "year": "2026",
      "venue": "Preprint 2026",
      "title": "SpaceFlow: Locally Controllable 3D Generation",
      "authors": "Neil De La Fuente*, Joan Lafuente Baeza*, Mukhammadali Sayfiddinov*, Felicia Scharitzer*, Marc Pollefeys, Ata Çelen, Sayan Deb Sarkar†, Elisabetta Fedele†",
      "description": "Training-free 3D generation from geometric primitives, with per-part control over shape adherence and part-specific text or image appearance cues.",
      "image": "https://spaceflow3d.github.io/spaceflow/assets/figures/teaser-video-poster.png",
      "alt": "SpaceFlow teaser demonstrating locally controllable 3D generation",
      "paper": "https://arxiv.org/pdf/2610.12399",
      "project": "https://spaceflow3d.github.io/",
      "code": "https://github.com/SpaceFlow3D/spaceflow",
      "bibtex": "@misc{delafuente2026spaceflow,\n  title = {SpaceFlow: Locally Controllable 3D Generation},\n  author = {De La Fuente, Neil and Lafuente Baeza, Joan and Sayfiddinov, Mukhammadali and Scharitzer, Felicia and Pollefeys, Marc and Çelen, Ata and Deb Sarkar, Sayan and Fedele, Elisabetta},\n  year = {2026},\n  note = {Preprint}\n}",
      "video": "https://spaceflow3d.github.io/spaceflow/assets/SpaceFlow-teaser.mp4?v=20261001-v13",
      "status": "Under review"
    },
    {
      "id": "comics-text-cloze",
      "year": "2024",
      "venue": "ICDAR 2024",
      "title": "Multimodal Transformer for Comics Text-Cloze",
      "authors": "Emanuele Vivoli*, Joan Lafuente Baeza*, Ernest Valveny Llobet, Dimosthenis Karatzas",
      "description": "A Multimodal-LLM for a comics text-cloze task, improving accuracy by 10% over existing models through a domain-adapted visual encoder and new OCR annotations, and extend the task to a generative format.",
      "image": "assets/comics-task-balanced.png",
      "alt": "Multimodal Transformer text-cloze task diagram showing comic context panels, a masked question panel, answer options, and text generation",
      "paper": "https://doi.org/10.1007/978-3-031-70552-6_8",
      "project": "",
      "code": "https://github.com/joanlafuente/ComicVT5",
      "bibtex": ""
    }
  ],
  "experience": [
    {
      "name": "ETH Zürich",
      "detail": "Teaching Assistant · Zürich, Switzerland",
      "date": "Sep 2026–Present",
      "summary": "Data Science & Machine Learning: exercise sessions, tutoring hours, and assignment grading.",
      "category": "teaching"
    },
    {
      "name": "CVG & Gradient Spaces Lab",
      "detail": "Research project · Zürich, Switzerland",
      "date": "Feb 2026–Present",
      "summary": "Large-scale video diffusion models for abstract visual reasoning. Distributed multi-GPU training supported by a Swiss AI Initiative Small Project compute grant.",
      "category": "research"
    },
    {
      "name": "Centre de Visió per Computador",
      "detail": "Research Intern · Cerdanyola del Vallès, Spain",
      "date": "Feb–Jul 2025",
      "summary": "Fixation-guided visual attention with reinforcement learning, Transformers, A2C, and PPO. Bachelor’s thesis awarded Matrícula d’Honor.",
      "link": "https://ddd.uab.cat/record/317802",
      "linkLabel": "Bachelor’s thesis",
      "category": "research"
    },
    {
      "name": "Mitek Systems",
      "detail": "Research Intern · Sant Cugat del Vallès, Spain",
      "date": "Sep–Dec 2024",
      "summary": "Training-data generation and deep learning for document image forgery detection, segmentation, and classification.",
      "category": "research"
    },
    {
      "name": "Centre de Visió per Computador",
      "detail": "Research Intern · Cerdanyola del Vallès, Spain",
      "date": "Jul 2023–Jan 2024",
      "summary": "Multimodal Transformers, contrastive domain adaptation, and OCR annotations for comics. Work published at ICDAR 2024.",
      "category": "research"
    }
  ],
  "education": [
    {
      "name": "ETH Zürich",
      "detail": "Master’s in Data Science",
      "date": "Sep 2025–Present",
      "summary": "GPA: 5.68/6. Coursework includes probabilistic AI, big data, robot planning, robot learning, computational statistics, and 3D vision."
    },
    {
      "name": "Universitat Autònoma de Barcelona",
      "detail": "Bachelor’s in Artificial Intelligence",
      "date": "Sep 2021–Jul 2025",
      "summary": "Average: 9.42/10. First in a cohort of 50 students; distinction for the best academic record in the School of Engineering. Matrícula d’Honor in 20 of 37 subjects."
    }
  ],
  "supervision": [],
  "service": [
    {
      "label": "Teaching",
      "text": "Teaching Assistant for Data Science & Machine Learning at ETH Zürich, September 2026–present."
    }
  ],
  "skills": [
    {
      "label": "Programming",
      "text": "Python, R, SQL, JSONiq; basic C++."
    },
    {
      "label": "Languages",
      "text": "Catalan and Spanish (native), English (C1), German (A1.1)."
    }
  ],
  "contactTitle": "Let’s talk research.",
  "contactText": "For research collaborations or questions about my work, feel free to get in touch.",
  "projects": [
    {
      "id": "fixation-guided-attention",
      "year": "2025",
      "type": "Bachelor’s thesis",
      "title": "Fixation-Guided Visual Attention Models with Transformers",
      "institution": "Universitat Autònoma de Barcelona · Centre de Visió per Computador",
      "description": "Fixation-guided visual attention with Transformers and reinforcement learning. The model explores an image through a sequence of fixations, choosing where to look next and when to stop and make a prediction.",
      "image": "assets/fixation-teaser-sharp-poster.jpg",
      "alt": "Thesis demonstration showing sequential fixations, observed regions, per-step digit predictions and confidence, and stop or continue decisions",
      "thesis": "https://ddd.uab.cat/pub/tfg/2024/tfg_8956007/Fixation_Guided_Visual_Attention_Models_with_Transformers.pdf",
      "url": "https://ddd.uab.cat/record/317802",
      "code": "https://github.com/joanlafuente/ScanPath-Attention",
      "video": "assets/fixation-teaser-sharp.mp4",
      "date": "July 2025"
    },
    {
      "id": "point2weight",
      "year": "2025",
      "type": "3D Vision course project",
      "title": "Point2Weight: HyperNetwork-Driven Implicit Function Estimation from Point Clouds",
      "authors": "Joan Lafuente Baeza*, Maria Pilligua*, Júlia Garcia*",
      "boldAuthors": [
        "Joan Lafuente Baeza"
      ],
      "institution": "Universitat Autònoma de Barcelona · 3D Vision course",
      "description": "3D surface reconstruction from sparse or noisy point clouds. Point2Weight predicts an object-specific signed distance function, turning discrete points into a continuous surface without per-object optimisation.",
      "image": "assets/point2weight-teaser-balanced.svg",
      "alt": "Point2Weight architecture: a point cloud embedding conditions a hypernetwork that predicts per-object hash-grid parameters and MLP weights for signed distance function estimation.",
      "report": "assets/point2weight-report.pdf",
      "date": "June 2025"
    },
    {
      "id": "autonomous-navigation",
      "year": "2025",
      "date": "June 2025",
      "type": "Autonomous Navigation course project",
      "title": "Autonomous Driving with Imitation Learning",
      "authors": "Joan Lafuente Baeza*, Maria Pilligua*, Xavi Soto*",
      "boldAuthors": [
        "Joan Lafuente Baeza"
      ],
      "institution": "Universitat Autònoma de Barcelona · Autonomous Navigation course",
      "description": "Autonomous driving on a physical robotic vehicle, learned from human demonstrations. The system combines camera and LiDAR inputs to follow lanes, avoid obstacles, and navigate previously unseen tracks.",
      "image": "assets/autonav-hero.png",
      "alt": "Physical robotic vehicle equipped with a camera and LiDAR beside an obstacle on an indoor driving track.",
      "report": "assets/autonomous-navigation-report.pdf"
    }
  ],
  "awards": [
    {
      "title": "Swiss AI Initiative Small Project Compute Grant",
      "date": "April 2026",
      "detail": "CSCS · 10,000 compute hours supporting research on video diffusion models for abstract visual reasoning."
    },
    {
      "title": "Best Academic Record distinction across all UAB engineering degrees",
      "date": "Nov 2025",
      "detail": "Recognising the best academic records across all engineering degrees at Universitat Autònoma de Barcelona, awarded to the top four students in 2025."
    },
    {
      "title": "Extraordinary Bachelor’s Degree Award (Premi Extraordinari de Titulació)",
      "date": "Nov 2025",
      "detail": "Universitat Autònoma de Barcelona · Awarded for the best academic record in the bachelor’s degree in Artificial Intelligence."
    },
    {
      "title": "Elena Maseras Research Fellowship",
      "date": "Feb 2025",
      "detail": "A research fellowship supporting advanced study of state-of-the-art techniques in computer vision and artificial intelligence."
    },
    {
      "title": "CVC Student Research Fellowship",
      "date": "June 2023",
      "detail": "An introductory fellowship offering a first experience of research at the Centre de Visió per Computador."
    }
  ]
};
