const DEFAULT_ALTIUM_VIEWER = {
    title: 'Interactive PCB Viewer',
    caption: 'Rotate the board directly on this page with a 3D-first Altium viewer.',
    projectSrc: '', // Public ZIP/RAR/7z archive URL for a PCB project or manufacturing package.
    projectToken: '', // Token from Altium's "Embed this design anywhere on the web" snippet.
    embedUrl: '', // Optional iframe src from an Altium Personal Space embed.
    openUrl: '',
    openLabel: 'Open board source',
    enabledViews: '3d,pcb',
    activeView: '3d',
    sourceType: 'Design',
    height: 620,
    fallbackImage: 'assets/altium-viewer-placeholder.svg',
    note: 'Paste either an Altium embed token, an iframe source, or a public project archive to turn on the live viewer.'
};

const ALTIUM_VIEWERS = {
    esp32pet: {
        ...DEFAULT_ALTIUM_VIEWER,
        title: 'ESP32Pet Interactive Board',
        caption: 'Inspect the ESP32Pet handheld directly in 3D, with the PCB and schematic views available from the same embedded panel.',
        projectSrc: 'assets/esp32pet-kicad-viewer-20260330.zip',
        openUrl: 'https://github.com/dishishshawn/ESP32Pet/tree/master/ESP32Pet%20PCB',
        openLabel: 'Open board source',
        enabledViews: '3d,pcb,sch',
        activeView: '3d',
        localFallbackHeading: 'Deploy the site to test the live 3D viewer',
        localFallbackNote: 'This board now uses a trimmed ZIP bundled with the portfolio, which fixes the production render. Altium cannot fetch localhost files, so local development falls back to the preview image until the site is hosted publicly.',
        note: 'This viewer uses a trimmed KiCad project archive so Altium loads only the live ESP32Pet board files instead of the full repository history.'
    },
    canable: {
        ...DEFAULT_ALTIUM_VIEWER,
        title: 'CANable Interactive Board',
        caption: 'Inspect the CAN-to-USB robotics board directly on the page with PCB, 3D, and schematic views from the public GitHub source archive.',
        projectSrc: 'https://codeload.github.com/dishishshawn/OpenCAN/zip/refs/heads/main',
        openUrl: 'https://github.com/dishishshawn/OpenCAN',
        openLabel: 'Open board source',
        enabledViews: '3d,pcb,sch',
        activeView: '3d',
        note: 'This viewer uses the public GitHub archive for the CANable board, so the 3D board can load directly inside the case study.'
    },
    stormControlBoard: {
        ...DEFAULT_ALTIUM_VIEWER,
        title: 'STORM Control Board Interactive Board',
        caption: 'Explore the STORM robot control board in 3D directly inside the case-study page.',
        projectSrc: 'https://codeload.github.com/dishishshawn/STORM_Control_Board/zip/refs/heads/main',
        openUrl: 'https://github.com/dishishshawn/STORM_Control_Board',
        openLabel: 'Open board source',
        enabledViews: '3d,pcb',
        activeView: '3d',
        note: 'This viewer uses the public GitHub archive for the STORM control board, so the 3D board can load directly inside the case study.'
    },
    infraredSensorBoard: {
        ...DEFAULT_ALTIUM_VIEWER,
        title: 'Infrared Sensor Board Interactive Board',
        caption: 'Inspect the infrared sensor board directly on the page with 3D, PCB, and schematic views from the public GitHub archive.',
        projectSrc: 'https://codeload.github.com/dishishshawn/InfaredPCB/zip/refs/heads/main',
        openUrl: 'https://github.com/dishishshawn/InfaredPCB',
        openLabel: 'Open board source',
        enabledViews: '3d,pcb,sch',
        activeView: '3d',
        note: 'This viewer uses the public GitHub archive for the infrared sensor board, so the 3D board can load directly inside the case study.'
    }
};

window.PROJECT_DATA = {
    'esp32pet': {
        title: 'ESP32Pet',
        eyebrow: 'Featured Build',
        status: 'Open Source',
        type: 'Embedded Hardware',
        visibility: 'Public repository',
        github: 'https://github.com/dishishshawn/ESP32Pet',
        summary: 'Open-source Tamagotchi-style handheld built on an ESP32 with an ST7735 LCD, physical buttons, EEPROM-backed persistent stats, and a custom PCB/case workflow.',
        description: 'This project combines embedded firmware, custom PCB design, and product-style iteration into a handheld virtual pet platform. It reflects both hardware and software ownership, from system design and power considerations to the user-facing gameplay loop.',
        altiumViewer: ALTIUM_VIEWERS.esp32pet,
        stack: ['ESP32', 'ST7735 TFT LCD', 'C/C++', 'PlatformIO / Arduino IDE', 'KiCad', 'EEPROM', 'LiPo Battery', 'MCP1700 LDO'],
        highlights: [
            'Designed around a custom PCB and enclosure workflow instead of a dev-board-only prototype.',
            'Implemented persistent gameplay stats using EEPROM-backed storage.',
            'Integrated display control, button handling, and low-power embedded considerations.'
        ],
        media: [
            { title: 'Schematic Export', placeholder: 'Schematic Preview', text: 'Add a KiCad schematic screenshot or PDF export showing the ESP32, display, power, and button circuitry.' },
            { title: '3D PCB Render', placeholder: '3D Board Model', text: 'Drop in a 3D render of the PCB and enclosure to highlight the physical design work.' },
            { title: 'Demo Photo / Video', placeholder: 'Gameplay Demo', text: 'Show the assembled device running the pet UI, animations, or button interactions.' }
        ]
    },
    'relevance-classification-model': {
        title: 'Relevance Classification Model',
        eyebrow: 'Research + ML',
        status: 'OU Project',
        type: 'Machine Learning / Research Software',
        visibility: 'Public repository',
        github: 'https://github.com/dishishshawn/Relevance-Classification-Model',
        summary: 'Research project for OU that acts like a relevance-ranking engine for social media posts using active feedback, uncertainty sampling, and ML experimentation workflows.',
        description: 'Built as a research-oriented machine learning system, this project explores how relevance ranking can be improved through active learning and uncertainty-driven feedback loops. It reflects my interest in ML systems that connect experimentation with practical decision-making.',
        stack: ['Python', 'Active Learning', 'Uncertainty Sampling', 'BERT-based Training', 'Bag-of-Words Models', 'ML Experimentation'],
        highlights: [
            'Explored relevance ranking strategies for noisy social media-style data.',
            'Used feedback-driven learning ideas to improve data selection and training efficiency.',
            'Compared different model approaches within an experimentation-focused workflow.'
        ],
        media: [
            { title: 'Pipeline Diagram', placeholder: 'Model Workflow', text: 'Add a visual of the training / ranking pipeline or feedback loop used in the project.' },
            { title: 'Results Snapshot', placeholder: 'Metrics / Output', text: 'Include training curves, ranking output examples, or evaluation metrics.' },
            { title: 'Demo / Notebook View', placeholder: 'Research Demo', text: 'Show a notebook, script output, or interface demonstrating how the model is used.' }
        ]
    },
    'canable': {
        title: 'CANable, CAN-to-USB Converter',
        eyebrow: 'Robotics Hardware',
        status: 'Most Complex Board',
        type: 'STM32 + CAN Board',
        visibility: 'Public repository',
        github: 'https://github.com/dishishshawn/OpenCAN',
        summary: 'Compact STM32-based CAN-to-USB interface board that lets the onboard PC communicate with distributed robot electronics over the CAN bus for IGVC.',
        description: 'This board represents some of my most technically challenging PCB work to date. It sits at the center of distributed robot communication, bridging the onboard PC and embedded subsystems over CAN while balancing firmware, hardware reliability, and board-level integration.',
        altiumViewer: ALTIUM_VIEWERS.canable,
        stack: ['STM32', 'CAN Bus', 'USB', 'Embedded Firmware', 'PCB Design', 'Robot Electronics'],
        highlights: [
            'Created a robust hardware bridge between the onboard computer and distributed CAN nodes.',
            'Worked through the practical constraints of USB, CAN transceivers, and embedded board integration.',
            'Designed for use in a real robotics environment rather than as a lab-only concept.'
        ],
        media: [
            { title: 'Schematic Export', placeholder: 'CAN / USB Schematic', text: 'Add the schematic showing the STM32, transceiver, USB path, and power routing.' },
            { title: '3D Board Render', placeholder: '3D PCB View', text: 'Show the 3D PCB model or routing screenshots to highlight board complexity.' },
            { title: 'Robot Integration Photo', placeholder: 'System Integration', text: 'Include a photo of the board installed on the robot or connected during bring-up.' }
        ]
    },
    'low-cost-security-camera': {
        title: 'Low-Cost Security Camera',
        eyebrow: 'Embedded Vision',
        status: 'IoT',
        type: 'ESP32-CAM Project',
        visibility: 'Public repository',
        github: 'https://github.com/dishishshawn/Low-Cost-Security-Camera',
        summary: 'Affordable home security camera system built around the ESP32-CAM AI-Thinker with Wi-Fi video streaming, motion detection, image capture, and remote viewing.',
        description: 'This project focused on building a practical low-cost embedded vision system around the ESP32-CAM ecosystem. It ties together camera streaming, networking, and lightweight remote monitoring features in an accessible hardware platform.',
        stack: ['ESP32-CAM AI-Thinker', 'Arduino IDE', 'ESP32 Camera Library', 'ESPAsyncWebServer', 'ArduinoJson', 'Wi-Fi'],
        highlights: [
            'Implemented Wi-Fi video streaming and remote viewing around the ESP32-CAM platform.',
            'Explored motion detection and image capture in a low-cost embedded system.',
            'Designed with affordability and practical deployment in mind.'
        ],
        media: [
            { title: 'Camera UI Demo', placeholder: 'Video / UI Demo', text: 'Add a short video or screenshot of the remote viewing interface.' },
            { title: 'Hardware Photo', placeholder: 'ESP32-CAM Setup', text: 'Show the assembled camera build or physical deployment.' },
            { title: 'System Diagram', placeholder: 'Signal Flow', text: 'Include a network or software architecture view of capture, processing, and streaming.' }
        ]
    },
    'storm-control-board': {
        title: 'STORM Control Board',
        eyebrow: 'Competition Robotics',
        status: 'STORM',
        type: 'Robot Control Electronics',
        visibility: 'Public repository',
        github: 'https://github.com/dishishshawn/STORM_Control_Board',
        summary: 'Main control and interface board for the STORM robot, integrating subsystem inputs and outputs with onboard microcontroller logic for reliable robot control.',
        description: 'The STORM Control Board was developed to serve as a core interface layer between robot subsystems. The design emphasized reliable I/O handling, clean control integration, and practical embedded deployment under robotics constraints.',
        altiumViewer: ALTIUM_VIEWERS.stormControlBoard,
        stack: ['Microcontroller', 'Embedded Systems', 'Digital / Analog I/O', 'PCB Design', 'Robot Controls'],
        highlights: [
            'Centralized interface logic between multiple robot subsystems.',
            'Handled mixed signal I/O and control-oriented board design requirements.',
            'Built for integration into a larger competition robotics platform.'
        ],
        media: [
            { title: 'Schematic Export', placeholder: 'Control Schematic', text: 'Add a schematic capture showing major I/O and subsystem interfaces.' },
            { title: '3D Board Render', placeholder: 'PCB Render', text: 'Show the 3D model or board routing used for the STORM system.' },
            { title: 'Robot Integration', placeholder: 'Installed Board Photo', text: 'Include a system photo with the board mounted and wired into the robot.' }
        ]
    },
    'sign-language-ai': {
        title: 'Sign-Language-AI',
        eyebrow: 'Computer Vision',
        status: 'Public Repo',
        type: 'AI Application',
        visibility: 'Public repository',
        github: 'https://github.com/dishishshawn/Sign-Language-AI',
        summary: 'Sign-language gesture recognition app with a training pipeline, prediction script, and GUI for uploading images and viewing results.',
        description: 'This project focuses on accessible computer vision and applied ML. It combines model training, prediction tooling, and a simple GUI workflow to make sign-language recognition more interactive and interpretable.',
        stack: ['Python', 'YOLOv8', 'OpenCV', 'Tkinter', 'Pillow', 'NumPy'],
        highlights: [
            'Built both the training and inference sides of the recognition workflow.',
            'Added a simple desktop GUI for loading images and displaying results.',
            'Connected applied CV tooling with a real user-facing use case.'
        ],
        media: [
            { title: 'Prediction Demo', placeholder: 'Demo Image / Video', text: 'Add a recording or screenshot of the prediction workflow and final classification output.' },
            { title: 'GUI Snapshot', placeholder: 'App Interface', text: 'Show the Tkinter app layout or sample usage screen.' },
            { title: 'Model Results', placeholder: 'Recognition Output', text: 'Include an annotated image or result example from the trained model.' }
        ]
    },
    'gold-fish': {
        title: 'Gold.fish',
        eyebrow: 'Full-Stack Web App',
        status: 'Public Repo',
        type: 'Finance Visualization App',
        visibility: 'Public repository',
        github: 'https://github.com/dishishshawn/Gold.fish',
        summary: 'Financial tracking web app that visualizes income and expenses through the growth of a digital fish tank, turning personal finance into a game-like experience.',
        description: 'Gold.fish turns personal finance into a more engaging visual system by tying spending behavior to a digital fish-tank metaphor. It blends frontend design, backend logic, and a playful feedback loop into one app concept.',
        stack: ['React', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
        highlights: [
            'Used visualization to make budgeting and spending trends more intuitive.',
            'Connected a React frontend to backend logic for data handling.',
            'Designed around a strong product idea rather than a purely technical demo.'
        ],
        media: [
            { title: 'UI Demo', placeholder: 'Web App Screenshot', text: 'Add a screenshot of the dashboard, fish tank, or expense tracking interface.' },
            { title: 'Feature Walkthrough', placeholder: 'Short Demo Video', text: 'Show how entering income or expenses changes the visual state of the app.' },
            { title: 'Architecture Notes', placeholder: 'App Structure', text: 'Include a simple diagram of the frontend/backend flow if desired.' }
        ]
    },
    'maze-generator-solver': {
        title: 'Maze Generator Solver',
        eyebrow: 'Algorithms + GUI',
        status: 'Public Repo',
        type: 'Python Desktop App',
        visibility: 'Public repository',
        github: 'https://github.com/dishishshawn/Maze-Generator-Solver-Python',
        summary: 'GUI-based maze generator and solver that creates random mazes, supports customizable size, and uses different frontier strategies for solving.',
        description: 'This project combines algorithmic thinking with a visual desktop interface. It explores how different search strategies behave in practice while presenting the output in an interactive Tkinter-based GUI.',
        stack: ['Python', 'Tkinter', 'Threading', 'Queue / Stack Frontier Logic'],
        highlights: [
            'Built a customizable maze-generation and solving workflow from scratch.',
            'Visualized search behavior through a desktop GUI environment.',
            'Used algorithmic experimentation to compare frontier strategies.'
        ],
        media: [
            { title: 'Maze UI', placeholder: 'Solver Interface', text: 'Add a screenshot of the maze generator and visualization interface.' },
            { title: 'Algorithm Demo', placeholder: 'Animated Solve', text: 'Include a short clip or sequential images showing the solver in action.' },
            { title: 'Configuration View', placeholder: 'Controls Snapshot', text: 'Show the size, options, or frontier selection controls for the app.' }
        ]
    },
    'diet-tracker': {
        title: 'Diet Tracker',
        eyebrow: 'Desktop App',
        status: 'Public Repo',
        type: 'Health Tracking Software',
        visibility: 'Public repository',
        github: 'https://github.com/dishishshawn/diet-tracker',
        summary: 'Local desktop app for tracking meals, workouts, calories, and logged fitness data with built-in visualization.',
        description: 'Diet Tracker focuses on practical data logging and simple desktop visualization. It combines local persistence, plotting, and a task-oriented GUI into a useful personal analytics workflow.',
        stack: ['Python', 'Tkinter', 'Matplotlib', 'SQLAlchemy'],
        highlights: [
            'Tracked meals, workouts, and calorie information in a lightweight local app.',
            'Used visualizations to make logged data easier to interpret over time.',
            'Combined GUI, database, and plotting functionality in one workflow.'
        ],
        media: [
            { title: 'Dashboard Screenshot', placeholder: 'Tracker UI', text: 'Add a screenshot of the main logging interface or meal/workout dashboard.' },
            { title: 'Visualization View', placeholder: 'Graphs / Charts', text: 'Show the calorie, workout, or progress plots generated by the app.' },
            { title: 'Feature Demo', placeholder: 'Usage Flow', text: 'Include a quick recording of the add-entry and review workflow.' }
        ]
    },
    'esp32-wifi-upload-to-screen': {
        title: 'ESP32 WiFi Upload to Screen',
        eyebrow: 'Embedded Display Project',
        status: 'Public Repo',
        type: 'ESP32 + Web Server',
        visibility: 'Public repository',
        github: 'https://github.com/dishishshawn/ESP32-WIFI-Upload-to-Screen',
        summary: 'Embedded ESP32 project that hosts a server for uploading JPG images and displaying them on an ST7735 screen.',
        description: 'This project blends embedded networking with a physical display interface. It allowed image upload over Wi-Fi and immediate rendering on a small screen, tying together web interaction and embedded device control.',
        stack: ['ESP32', 'C++', 'HTML', 'PlatformIO', 'Embedded Web Server', 'ST7735 Display'],
        highlights: [
            'Hosted a lightweight upload interface directly from the ESP32.',
            'Rendered uploaded JPGs onto an ST7735 display in real time.',
            'Connected embedded web tooling with physical UI output.'
        ],
        media: [
            { title: 'Web Upload Demo', placeholder: 'Upload Interface', text: 'Add a browser screenshot of the upload page used to send images.' },
            { title: 'Display Output', placeholder: 'ST7735 Result', text: 'Show the uploaded image rendered on the physical display.' },
            { title: 'System Photo', placeholder: 'Project Hardware', text: 'Include a quick photo of the ESP32 and screen setup.' }
        ]
    },
    'kicad-st7735s-tft': {
        title: 'KiCad ST7735S 1.8in TFT Library',
        eyebrow: 'PCB Library Work',
        status: 'Public Repo',
        type: 'KiCad Library Design',
        visibility: 'Public repository',
        github: 'https://github.com/dishishshawn/kicad-st7735s-1.8in-tft',
        summary: 'Custom KiCad symbol and footprint library for a 1.8-inch ST7735S TFT display board.',
        description: 'This library package supports custom PCB workflows by providing reusable symbol and footprint assets for a specific TFT display board. It reflects the kind of support tooling that makes future hardware iteration faster and cleaner.',
        stack: ['KiCad', 'Custom Symbol Design', 'Footprint Creation', 'Library Management'],
        highlights: [
            'Created reusable schematic and PCB footprint assets for future board design work.',
            'Improved repeatability for display integration across multiple projects.',
            'Focused on practical documentation and CAD asset organization.'
        ],
        media: [
            { title: 'Symbol Preview', placeholder: 'KiCad Symbol', text: 'Add a screenshot of the schematic symbol definition.' },
            { title: 'Footprint / 3D View', placeholder: 'Footprint Layout', text: 'Show the footprint and optional 3D representation of the display module.' },
            { title: 'Usage Example', placeholder: 'Library in Project', text: 'Include a screenshot of the library being used inside a real PCB design.' }
        ]
    },
    '5v-buck-converter': {
        title: '5V Buck Converter',
        eyebrow: 'Power Electronics',
        status: 'STORM',
        type: 'Custom Power Board',
        visibility: 'Private robotics work',
        github: '',
        summary: 'Custom 5V buck converter board for the STORM robot power system, used to step down voltage efficiently for onboard electronics.',
        description: 'This board focused on practical power delivery for robotics applications, where efficiency, stability, and clean regulation matter for the rest of the system. It complements my broader embedded hardware and PCB experience.',
        stack: ['Power Electronics', 'Buck Conversion', 'Voltage Regulation', 'PCB Design'],
        highlights: [
            'Designed for efficient voltage step-down in a robotics power environment.',
            'Balanced practical board layout with power integrity considerations.',
            'Supported the electrical needs of onboard robot subsystems.'
        ],
        media: [
            { title: 'Power Schematic', placeholder: 'Buck Converter Schematic', text: 'Add the regulator schematic and main power path diagram.' },
            { title: 'Board Render', placeholder: 'Power PCB View', text: 'Show the routing and placement decisions for the converter board.' },
            { title: 'System Integration', placeholder: 'Installed Power Board', text: 'Include a photo of the board connected within the robot power system.' }
        ]
    },
    'infrared-sensor-board': {
        title: 'Infrared Sensor Board',
        eyebrow: 'Sensing + Embedded',
        status: 'STORM',
        type: 'Pico-based Sensor Board',
        visibility: 'Public repository',
        github: 'https://github.com/dishishshawn/InfaredPCB',
        summary: 'Raspberry Pi Pico-based infrared sensing board using TSOP receivers to detect, decode, and transmit IR signals back to the main PC in real time for STORM.',
        description: 'The infrared sensing board was designed for real-time signal capture and communication inside the STORM robot system. It brought together embedded firmware, sensor interfacing, and system-level data handoff to the main computer.',
        altiumViewer: ALTIUM_VIEWERS.infraredSensorBoard,
        stack: ['Raspberry Pi Pico', 'TSOP IR Receivers', 'Embedded C/C++', 'Real-time Signal Decoding', 'Serial Communication'],
        highlights: [
            'Captured and decoded incoming IR signals using a Pico-based embedded platform.',
            'Passed processed sensor data back to the main PC in real time.',
            'Supported a larger robotics system through sensor-focused hardware design.'
        ],
        media: [
            { title: 'Sensor Schematic', placeholder: 'IR Circuit View', text: 'Add a screenshot of the sensor connections, decoding logic, and communication path.' },
            { title: 'Board Photo', placeholder: 'Sensor Hardware', text: 'Show the assembled board or its mounting within the robot system.' },
            { title: 'Signal Demo', placeholder: 'Real-Time Output', text: 'Include serial output, logs, or a demo of signal detection in use.' }
        ]
    }
};
