/* Case-study content. Rendered by project-detail.js.
   Strings may contain inline markup (subscripts, <b>, <code>). */

const DEFAULT_ALTIUM_VIEWER = {
  title: "Interactive PCB Viewer",
  caption:
    "Rotate the board directly on this page with a 3D-first Altium viewer.",
  projectSrc: "", // Public ZIP/RAR/7z archive URL for a PCB project or manufacturing package.
  projectToken: "", // Token from Altium&rsquo;s "Embed this design anywhere on the web" snippet.
  embedUrl: "", // Optional iframe src from an Altium Personal Space embed.
  openUrl: "",
  openLabel: "Open board source",
  enabledViews: "3d,pcb",
  activeView: "3d",
  sourceType: "Design",
  height: 620,
  fallbackImage: "assets/altium-viewer-placeholder.svg",
  note: "Paste either an Altium embed token, an iframe source, or a public project archive to turn on the live viewer.",
};

const ALTIUM_VIEWERS = {
  esp32pet: {
    ...DEFAULT_ALTIUM_VIEWER,
    title: "ESP32Pet",
    caption:
      "Inspect the handheld in 3D, with PCB and schematic views in the same panel.",
    projectSrc: "assets/esp32pet-kicad-viewer-20260330.zip",
    openUrl:
      "https://github.com/dishishshawn/ESP32Pet/tree/master/ESP32Pet%20PCB",
    openLabel: "Open board source",
    enabledViews: "3d,pcb,sch",
    activeView: "3d",
    localFallbackHeading: "Live 3D viewer needs the deployed site",
    localFallbackNote:
      "Altium cannot fetch files from localhost, so local development falls back to the preview image. The viewer works on the published site.",
    note: "Loads a trimmed KiCad archive so the viewer pulls only the live board files rather than the full repository.",
  },
  canable: {
    ...DEFAULT_ALTIUM_VIEWER,
    title: "OpenCAN",
    caption:
      "PCB, 3D, and schematic views loaded straight from the public GitHub archive.",
    projectSrc:
      "https://codeload.github.com/dishishshawn/OpenCAN/zip/refs/heads/main",
    openUrl: "https://github.com/dishishshawn/OpenCAN",
    openLabel: "Open board source",
    enabledViews: "3d,pcb,sch",
    activeView: "3d",
    note: "Loaded from the public OpenCAN repository archive.",
  },
  stormControlBoard: {
    ...DEFAULT_ALTIUM_VIEWER,
    title: "STORM Control Board",
    caption: "Explore the control board in 3D inside the case study.",
    projectSrc:
      "https://codeload.github.com/dishishshawn/STORM_Control_Board/zip/refs/heads/main",
    openUrl: "https://github.com/dishishshawn/STORM_Control_Board",
    openLabel: "Open board source",
    enabledViews: "3d,pcb",
    activeView: "3d",
    note: "Loaded from the public STORM control board repository archive.",
  },
  infraredSensorBoard: {
    ...DEFAULT_ALTIUM_VIEWER,
    title: "Infrared Sensor Board",
    caption:
      "3D, PCB, and schematic views loaded from the public GitHub archive.",
    projectSrc:
      "https://codeload.github.com/dishishshawn/InfaredPCB/zip/refs/heads/main",
    openUrl: "https://github.com/dishishshawn/InfaredPCB",
    openLabel: "Open board source",
    enabledViews: "3d,pcb,sch",
    activeView: "3d",
    note: "Loaded from the public infrared sensor board repository archive.",
  },
};

window.PROJECT_DATA = {
  /* ===================== RESEARCH ===================== */

  xrdc: {
    title: "XRDC",
    plainTitle: "XRDC — X-ray diffraction analysis",
    eyebrow: "Research software",
    period: "Jan 2026 – present",
    role: "Center for Quantum Research &amp; Technology, University of Oklahoma",
    summary:
      "A MATLAB toolkit that replaced the group&rsquo;s hand-fit X-ray diffraction analysis with a repeatable pipeline. Ships as an installer so everyone runs the same build.",
    plainSummary:
      "XRDC, a MATLAB toolkit for X-ray diffraction analysis built for the Paik group at OU: rocking curves, reciprocal-space maps, XRR fitting, and lattice parameters.",
    github: "https://github.com/dishishshawn/xrdc-matlab",
    links: [
      {
        label: "v1.1.0 release",
        href: "https://github.com/dishishshawn/xrdc-matlab/releases/latest",
      },
    ],
    spec: [
      { k: "Role", v: "Sole developer" },
      { k: "Context", v: "Paik group, CQRT" },
      { k: "Language", v: "MATLAB (R2022b+)" },
      { k: "Release", v: "v1.1.0, July 2026" },
      { k: "Size", v: "83 source files" },
      { k: "License", v: "Academic use" },
    ],
    stack: [
      "MATLAB",
      "X-ray diffraction",
      "Reciprocal-space mapping",
      "Parratt reflectivity",
      "Nelson–Riley",
      "MATLAB Runtime",
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Every film the group grows gets judged on the same three questions: is it crystalline, how strained is it, and how sharp is the interface. Rocking curves, θ&ndash;2θ scans, reflectivity, and reciprocal-space maps all end the same way. Somebody has to fit the peaks.",
          "That was manual. The group&rsquo;s software had no automatic peak detection, so each scan meant sifting by hand, and it all had to be redone if a scan got reprocessed. Two people analyzing the same sample could report numbers that didn&rsquo;t match. The instrument was fine. The analysis was the bottleneck.",
        ],
      },
      {
        heading: "What it does",
        list: [
          "Reads <b>eight instrument formats</b> directly, no conversion step: PANalytical XRDML point and area scans, Philips X00, and Rigaku SmartLab <code>.hgx</code>, <code>.ras</code>, <code>.raw</code>, and <code>.txt</code>.",
          "Handles the standard scan types: θ&ndash;2θ, rocking curve, φ scan, X-ray reflectivity, and reciprocal-space maps.",
          "Detects peaks with a prominence threshold derived from the scan itself, not a number typed in by hand.",
          "Gets lattice parameters by <b>Nelson&ndash;Riley</b> extrapolation and matches them to a material with <code>identifyMaterial</code>.",
          "Fits XRR slab models with <b>Parratt reflectivity and N&eacute;vot&ndash;Croce roughness</b>. It&rsquo;s a seeded multi-start over thickness, density, and roughness, and it reports a standard error on each parameter along with the fit.",
          "<code>analyzeStrainRSM</code> finds the peaks in a reciprocal-space map and returns in-plane and out-of-plane lattice parameters, biaxial strain, the relaxed lattice parameter, and composition.",
          "Outputs publication-ready figures in one consistent style.",
        ],
      },
      {
        heading: "Why reproducibility was the point",
        body: [
          "A film-quality number is only worth reporting if it means the same thing next month and in someone else&rsquo;s hands. That&rsquo;s where most of the work went, more than the math.",
        ],
        list: [
          "One figure style for the whole group, matched to Schwaigert et al., <i>J. Vac. Sci. Technol. A</i> <b>41</b>, 022703 (2023), so plots from different people compare directly.",
          "Every optional-toolbox code path has a <b>pure-MATLAB fallback</b>, so a result doesn&rsquo;t depend on which licenses happened to be on the machine that produced it.",
          "A <code>runtests</code> suite covers the analysis paths. If a refactor changes a fitted number, the tests catch it.",
          "v1.1.0 ships as a <b>Windows installer</b> that pulls the matching MATLAB Runtime on first launch. Labmates without a MATLAB license run the same build I do.",
        ],
      },
      {
        heading: "How it is organized",
        body: [
          "83 MATLAB files under one <code>+xrdc</code> package: <code>+io</code> for instrument readers, <code>+lattice</code> for d-spacing, Nelson&ndash;Riley, and material identification, <code>+peaks</code> for detection and fitting, <code>+rsm</code> for reciprocal-space geometry and strain, <code>+signal</code> for smoothing and background subtraction, and <code>+plot</code> for the figure style. Keeping I/O separate from the physics is why the fifth and sixth file formats were cheap to add.",
        ],
      },
      {
        heading: "Credit and scope",
        body: [
          "XRDC is a MATLAB port of Dr. Tassilo Heeg&rsquo;s Delphi XRDC tool (FZJ/ISG1-IT). The core algorithms are his. The port, the XRR slab fitting, the RSM strain and composition work, the test suite, and the packaged release are mine.",
        ],
        caveat:
          "As of v1.1.0, the RSM geometry is validated against real TiO<sub>2</sub> data. The strain and composition path is validated on synthetic data so far. There&rsquo;s a known PbTiO<sub>3</sub> vs. PZT ranking limitation in (00l) material identification, documented in the repo.",
      },
    ],
    media: [
      {
        image: "assets/research/xrdc-ui.png",
        alt: "XRDC scan analyzer interface",
        text: "XRDC scan analyzer, rocking-curve and reciprocal-space-map workflows.",
      },
    ],
  },

  "batio3-heterostructures": {
    title: "BaTiO<sub>3</sub>/SrTiO<sub>3</sub>/Si",
    plainTitle: "BaTiO3/SrTiO3/Si heterostructures",
    eyebrow: "Research",
    period: "Jan 2026 – present",
    role: "Dr. Hanjong Paik&rsquo;s group &middot; Center for Quantum Research &amp; Technology",
    summary:
      "Growing a perovskite oxide stack on silicon, then using diffraction, transport, and optical measurements together to find out whether the crystal, the strain, and the interfaces are any good.",
    plainSummary:
      "Epitaxial BaTiO3/SrTiO3/Si heterostructure growth and characterization at OU’s Center for Quantum Research and Technology.",
    unlinkedNote: "Active, unpublished research",
    spec: [
      {
        k: "Role",
        v: "Undergraduate Researcher &amp; Engineering Pathways Fellow",
      },
      { k: "Group", v: "Dr. Hanjong Paik, CQRT" },
      { k: "Materials", v: "BaTiO<sub>3</sub>, SrTiO<sub>3</sub>, Si" },
      { k: "Since", v: "January 2026" },
    ],
    stack: [
      "Vacuum deposition",
      "Epitaxial growth",
      "HRXRD",
      "Rocking curves",
      "Reciprocal-space mapping",
      "Transport measurement",
      "Optical characterization",
    ],
    sections: [
      {
        heading: "Why this stack",
        body: [
          "BaTiO<sub>3</sub> is a ferroelectric perovskite. SrTiO<sub>3</sub> is the template layer that lets it grow on silicon at all. If the stack is epitaxial on Si, you get a functional oxide on the same substrate the rest of electronics is built on.",
          "The hard part is the interface. Lattice mismatch and interface chemistry decide whether the film on top is a single crystal with a known strain state or something a lot more disordered, and you can&rsquo;t tell which without measuring carefully.",
        ],
      },
      {
        heading: "What I do on it",
        list: [
          "Grow the heterostructures by vacuum deposition and run the deposition hardware.",
          "Measure crystalline quality and strain by high-resolution XRD: <b>rocking curves</b> for mosaic spread, <b>reciprocal-space maps</b> for in-plane and out-of-plane lattice parameters and how much the film has relaxed.",
          "Check the structural picture against <b>transport and optical measurements</b> on the same samples, so a claim about film quality doesn&rsquo;t rest on diffraction alone.",
          "Run all the diffraction data through XRDC so the peak fitting is the same from sample to sample and person to person.",
        ],
      },
      {
        heading: "Why more than one measurement",
        body: [
          "A rocking curve width tells you about mosaic spread and nothing about strain. A reciprocal-space map separates the in-plane and out-of-plane lattice parameters and shows whether the film is coherently strained to the substrate or has relaxed. Transport and optical measurements pick up things diffraction can&rsquo;t see: carriers and defects that don&rsquo;t shift the average lattice.",
          "When the three agree, that&rsquo;s the result. When they don&rsquo;t, the structural picture is probably missing something, and that&rsquo;s usually the more interesting case.",
        ],
        caveat:
          "This work is active and unpublished, so this page sticks to methods. No preliminary numbers here.",
      },
    ],
    media: [
      {
        image: "assets/research/rsm.png",
        alt: "Reciprocal-space map of a BaTiO3/SrTiO3/Si heterostructure",
        text: "Reciprocal-space map used to separate in-plane from out-of-plane lattice parameter.",
      },
      {
        image: "assets/research/lab.jpg",
        alt: "View through a vacuum chamber viewport onto the deposition hardware inside",
        text: "Looking through the chamber viewport at the deposition hardware. The colors on the internals are thin-film interference from material deposited on everything the plume reaches.",
        portrait: true,
      },
    ],
  },

  /* ===================== HARDWARE & SOFTWARE ===================== */

  igvc: {
    title: "Intelligent Ground Vehicle Competition",
    plainTitle: "IGVC ground vehicle electronics",
    eyebrow: "Robotics hardware",
    period: "Aug 2025 – May 2026",
    role: "Electrical Member &middot; Sooner Competitive Robotics",
    summary:
      "Custom boards, RTOS firmware, and one CAN bus carrying every sensor on an autonomous ground vehicle, plus the bridge that made that bus debuggable.",
    plainSummary:
      "Custom PCBs, STM32 RTOS firmware, and CAN bus integration for an autonomous ground vehicle at the Intelligent Ground Vehicle Competition.",
    links: [
      {
        label: "OpenCAN source",
        href: "https://github.com/dishishshawn/OpenCAN",
      },
    ],
    spec: [
      { k: "Role", v: "Electrical member" },
      { k: "Team", v: "Sooner Competitive Robotics" },
      { k: "Duration", v: "Aug 2025 – May 2026" },
      { k: "Bus", v: "Single CAN backbone" },
    ],
    stack: [
      "Altium",
      "STM32",
      "ARM Cortex-M",
      "RTOS",
      "CAN / FDCAN",
      "C/C++",
      "SPI",
      "I²C",
      "UART",
    ],
    sections: [
      {
        heading: "The electrical scope",
        body: [
          "An autonomous ground vehicle has to move power, sensor data, and a safety signal around a frame that vibrates, and it has to stop the instant someone hits the e-stop. I worked the board and firmware side: the boards that regulate and condition, the firmware that schedules, and the bus that ties the sensors together.",
        ],
      },
      {
        heading: "Boards",
        list: [
          "Designed custom PCBs for <b>power regulation, signal conditioning, and hardware safety interlocks</b>.",
          "Took each board from schematic through layout, assembly, and system-level testing, so the board that came back from fab was the one I brought up and debugged.",
          "Put the interlocks in hardware, not firmware, so the stop path doesn&rsquo;t depend on software being alive.",
        ],
      },
      {
        heading: "Firmware",
        list: [
          "Wrote real-time control firmware in C/C++ on <b>STM32 (ARM Cortex-M)</b>.",
          "Ran it under an RTOS with prioritized tasks so control-loop timing doesn&rsquo;t get pushed around by slower housekeeping on the same core.",
        ],
      },
      {
        heading: "Integration",
        list: [
          "Put LiDAR, cameras, GPS, IMU, encoders, and the e-stop on one CAN bus. That keeps the wiring manageable, but it means the bus is the thing you have to understand.",
          "Built a <b>CAN-to-USB bridge</b> so the onboard PC could watch bus traffic live. That turned intermittent faults into something we could capture and replay.",
        ],
      },
    ],
  },

  canable: {
    title: "OpenCAN",
    eyebrow: "Robotics hardware",
    period: "IGVC",
    role: "CAN-to-USB bridge",
    summary:
      "A small STM32 board that bridges the vehicle&rsquo;s CAN bus to the onboard PC, so you can watch traffic live and reproduce a fault instead of guessing at it.",
    plainSummary:
      "OpenCAN, a compact STM32 CAN-to-USB interface board built for an autonomous ground vehicle.",
    github: "https://github.com/dishishshawn/OpenCAN",
    altiumViewer: ALTIUM_VIEWERS.canable,
    spec: [
      { k: "Role", v: "Board design and bring-up" },
      { k: "MCU", v: "STM32" },
      { k: "Interface", v: "CAN ↔ USB" },
      { k: "Built for", v: "IGVC vehicle" },
    ],
    stack: ["STM32", "CAN", "USB", "KiCad", "Embedded C"],
    sections: [
      {
        heading: "Why it exists",
        body: [
          "Once every sensor shares one CAN bus, the bus is where faults hide. A dropped frame, a wrong bit rate, or two nodes talking over each other all look the same from outside: the robot does something weird and nobody knows why.",
          "OpenCAN is the tool for that. It bridges the bus to USB so the onboard PC sees every frame as it happens. An intermittent fault becomes something you can capture and replay.",
        ],
      },
      {
        heading: "The board",
        list: [
          "Small STM32 board, sized to mount inside the vehicle instead of sitting on a bench.",
          "CAN transceiver on the front end, USB to the host PC.",
          "Laid out in KiCad. Full schematic and 3D board are viewable on this page.",
        ],
      },
    ],
    media: [
      {
        image: "assets/opencan-real-life.jpg",
        alt: "Fabricated OpenCAN board held in hand",
        text: "Assembled board after bring-up.",
      },
      {
        image: "assets/opencan-real-life-detail.jpg",
        alt: "Detail view of the assembled OpenCAN board",
        text: "Connector and transceiver side.",
      },
    ],
  },

  "heading-software": {
    title: "Heading Software",
    eyebrow: "Company",
    period: "Jan 2026 – present",
    role: "Founder &amp; Engineer",
    summary:
      "AI document extraction for oil and gas land services, built so the output can be checked and measured, not just produced.",
    plainSummary:
      "Heading Software: an LLM document extraction and verification pipeline for oil and gas land services.",
    unlinkedNote: "Private — commercial product",
    spec: [
      { k: "Role", v: "Founder &amp; Engineer" },
      { k: "Founded", v: "January 2026" },
      { k: "Domain", v: "Oil &amp; gas land services" },
    ],
    stack: [
      "LLM pipelines",
      "OCR",
      "Schema validation",
      "Citation grounding",
      "BullMQ",
      "Redis",
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Land services runs on documents: deeds, leases, assignments. The facts in them have to come out exactly right, with a pointer back to where each one came from. An extraction that&rsquo;s usually right isn&rsquo;t useful on its own. What matters is knowing <i>which</i> fields to trust.",
        ],
      },
      {
        heading: "The pipeline",
        list: [
          "Built the LLM document-extraction and verification pipeline end to end: <b>OCR, schema validation, and citation grounding</b>.",
          "Schema validation limits what each field can be, so a malformed extraction fails at the boundary instead of ending up in a report.",
          "Citation grounding ties every value back to its spot in the source document, so a reviewer can check a field in seconds instead of rereading the instrument.",
        ],
      },
      {
        heading: "Measuring it",
        list: [
          "Wrote an <b>offline evaluation harness</b> tracking per-field precision and recall against a hand-labeled test set.",
          "Per-field, not per-document, because fields don&rsquo;t fail at the same rate and one aggregate score hides the ones that matter.",
          "The harness is what makes prompt and model changes decidable. A change moves the numbers on the test set or it doesn&rsquo;t ship.",
        ],
      },
      {
        heading: "Running it at volume",
        list: [
          "<b>BullMQ/Redis batch layer with idempotent workers</b>, so a retry after a crash doesn&rsquo;t duplicate work or double-write results.",
          "Automated QA catches drift, duplicates, and corrupt inputs before a person sees them.",
        ],
      },
    ],
  },

  storm: {
    title: "Student Tele-Operated Robotics Mission",
    plainTitle: "STORM — Electrical Team Lead",
    eyebrow: "Competition robotics",
    period: "Aug 2024 – May 2025",
    role: "Electrical Team Lead &middot; Sooner Competitive Robotics",
    summary:
      "Led the electrical team on a tele-operated competition robot: power rails, signal decoding, and the design reviews that kept everyone&rsquo;s boards compatible with each other.",
    plainSummary:
      "Electrical team lead for STORM, a tele-operated competition robot: multi-voltage power rails, buck converters, and IR/RF signal decoding.",
    spec: [
      { k: "Role", v: "Electrical Team Lead" },
      { k: "Team", v: "Sooner Competitive Robotics" },
      { k: "Duration", v: "Aug 2024 – May 2025" },
    ],
    stack: [
      "Power electronics",
      "Buck converters",
      "IR / RF decoding",
      "PCB design",
      "RP2040",
      "Embedded C/C++",
    ],
    sections: [
      {
        heading: "Leading the electrical side",
        body: [
          "This was the first project where I owned an area instead of a board. Once you&rsquo;re running design reviews and test phases for a team, the hard part isn&rsquo;t any one schematic. It&rsquo;s making sure several people&rsquo;s boards agree on voltages, connectors, and what happens when the supply sags.",
        ],
      },
      {
        heading: "Power",
        list: [
          "Designed <b>multi-voltage power rails</b> feeding logic, sensing, and actuation from a shared source.",
          "Designed buck converters and got output <b>ripple under 5%</b>, measured on the bench.",
        ],
      },
      {
        heading: "Sensing",
        list: [
          "Implemented <b>IR and RF signal decoding</b> for the robot&rsquo;s sensing path.",
          "The IR board used TSOP receivers on a Raspberry Pi Pico, decoding in real time and passing results to the main PC.",
        ],
      },
      {
        heading: "Boards from this project",
        list: [
          '<a href="project.html?project=storm-control-board">STORM control board</a>: the main subsystem I/O interface.',
          '<a href="project.html?project=5v-buck-converter">5 V buck converter</a>: the step-down stage for onboard electronics.',
          '<a href="project.html?project=infrared-sensor-board">Infrared sensor board</a>: TSOP receivers and real-time decoding.',
        ],
      },
    ],
  },

  "relevance-classification-model": {
    title: "Relevance classification at scale",
    plainTitle: "Relevance classification model",
    eyebrow: "Machine learning research",
    period: "Sep 2024 – May 2025",
    role: "Undergraduate Researcher &middot; Data Institute for Societal Challenges, OU",
    summary:
      "Fine-tuned BERT for relevance classification over 1.6 million records, using active-learning uncertainty sampling to decide what got labeled next.",
    plainSummary:
      "BERT relevance classification with active-learning uncertainty sampling over 1.6 million records, at OU’s Data Institute for Societal Challenges.",
    github: "https://github.com/dishishshawn/Relevance-Classification-Model",
    spec: [
      { k: "Role", v: "Undergraduate researcher" },
      { k: "Lab", v: "DISC, University of Oklahoma" },
      { k: "Corpus", v: "1.6 million records" },
      { k: "Duration", v: "Sep 2024 – May 2025" },
    ],
    stack: [
      "Python",
      "PyTorch",
      "BERT",
      "Active learning",
      "Uncertainty sampling",
    ],
    sections: [
      {
        heading: "The constraint",
        body: [
          "The corpus was 1.6 million records and the labeling budget was a few people&rsquo;s time. Labeling at random would&rsquo;ve spent that on examples the model already got right. So the real question wasn&rsquo;t which architecture to use. It was which examples were worth a human&rsquo;s attention.",
        ],
      },
      {
        heading: "Approach",
        list: [
          "Fine-tuned <b>BERT</b> for relevance classification on noisy social-media-style text.",
          "Used <b>uncertainty sampling</b> to pick the next labeling batch from the examples the current model was least sure about, so each round was worth more than the last.",
          "Ran it as a loop (train, sample, label, retrain) and compared model variants inside it.",
        ],
      },
    ],
    media: [
      {
        image: "assets/fyre-poster.jpg",
        alt: "FYRE research poster for the relevance classification project",
        text: "Research poster presented for the DISC project.",
      },
    ],
  },

  /* ===================== SMALLER BUILDS ===================== */

  esp32pet: {
    title: "ESP32Pet",
    eyebrow: "Hardware + firmware",
    role: "Personal project",
    summary:
      "A Tamagotchi-style handheld on a custom PCB: ESP32, ST7735 LCD, physical buttons, and pet state in EEPROM so it survives a power cycle.",
    github: "https://github.com/dishishshawn/ESP32Pet",
    altiumViewer: ALTIUM_VIEWERS.esp32pet,
    spec: [
      { k: "MCU", v: "ESP32" },
      { k: "Display", v: "ST7735 TFT" },
      { k: "Power", v: "LiPo + MCP1700 LDO" },
      { k: "CAD", v: "KiCad" },
    ],
    stack: [
      "ESP32",
      "ST7735 TFT",
      "C/C++",
      "PlatformIO",
      "KiCad",
      "EEPROM",
      "MCP1700",
    ],
    sections: [
      {
        heading: "What it is",
        body: [
          "A handheld virtual pet, built as a finished thing instead of a dev board with wires hanging off it: custom PCB, enclosure, battery, and a gameplay loop that keeps running on or off the charger.",
        ],
      },
      {
        heading: "Notes",
        list: [
          "Pet stats stored in EEPROM, so nothing is lost on a power cycle.",
          "Display and button code written against a LiPo power budget, not a bench supply.",
          "Custom PCB and enclosure. Schematic, layout, and fit all had to agree.",
        ],
      },
    ],
    media: [
      {
        image: "assets/ESP32Pet Front.png",
        alt: "Front of the ESP32Pet PCB",
        text: "Front.",
      },
      {
        image: "assets/ESP32Pet Back.png",
        alt: "Back of the ESP32Pet PCB",
        text: "Back.",
      },
    ],
  },

  "infrared-sensor-board": {
    title: "Infrared sensor board",
    eyebrow: "Sensing + embedded",
    role: "STORM",
    summary:
      "A Raspberry Pi Pico board with TSOP receivers that detects, decodes, and streams infrared signals to the robot&rsquo;s main PC in real time.",
    github: "https://github.com/dishishshawn/InfaredPCB",
    altiumViewer: ALTIUM_VIEWERS.infraredSensorBoard,
    spec: [
      { k: "MCU", v: "Raspberry Pi Pico" },
      { k: "Sensor", v: "TSOP IR receivers" },
      { k: "Project", v: "STORM" },
    ],
    stack: ["Raspberry Pi Pico", "TSOP receivers", "Embedded C/C++", "Serial"],
    sections: [
      {
        heading: "What it does",
        body: [
          "Picks up infrared with TSOP receivers, decodes on the Pico, and hands the result to the robot&rsquo;s main computer over serial, fast enough that the robot acts on what it just saw.",
        ],
      },
      {
        heading: "Notes",
        list: [
          "Decoding happens on the board, so the host gets events, not a raw waveform to parse.",
          "Designed as part of the STORM sensing path, alongside the control and power boards.",
        ],
      },
    ],
  },

  "storm-control-board": {
    title: "STORM control board",
    eyebrow: "Competition robotics",
    role: "STORM",
    summary:
      "The main control and interface board for the STORM robot, tying subsystem I/O to onboard microcontroller logic.",
    github: "https://github.com/dishishshawn/STORM_Control_Board",
    altiumViewer: ALTIUM_VIEWERS.stormControlBoard,
    spec: [
      { k: "Function", v: "Subsystem I/O interface" },
      { k: "Signals", v: "Mixed digital / analog" },
      { k: "Project", v: "STORM" },
    ],
    stack: ["PCB design", "Mixed-signal I/O", "Embedded systems"],
    sections: [
      {
        heading: "What it does",
        body: [
          "Sits between the robot&rsquo;s subsystems and the microcontroller and centralizes the I/O, so adding or swapping a subsystem is a connector change, not a rewiring job. Mixed digital and analog on one board.",
        ],
      },
    ],
  },

  "5v-buck-converter": {
    title: "5 V buck converter",
    eyebrow: "Power electronics",
    role: "STORM",
    summary:
      "A custom step-down board for the STORM power system, feeding onboard electronics from the main supply.",
    unlinkedNote: "Private — team hardware",
    spec: [
      { k: "Output", v: "5 V" },
      { k: "Topology", v: "Buck" },
      { k: "Project", v: "STORM" },
    ],
    stack: ["Power electronics", "Buck conversion", "PCB design"],
    sections: [
      {
        heading: "What it does",
        body: [
          "Steps the robot&rsquo;s main supply down to the 5 V rail the onboard electronics run on. The layout mattered more than the schematic here. On a switching converter, placement and return paths decide whether the measured ripple matches the simulation.",
        ],
      },
    ],
  },

  "low-cost-security-camera": {
    title: "Low-cost security camera",
    eyebrow: "Embedded vision",
    role: "Personal project",
    summary:
      "A home security camera built around the ESP32-CAM AI-Thinker: Wi-Fi streaming, motion detection, image capture, and remote viewing.",
    github: "https://github.com/dishishshawn/Low-Cost-Security-Camera",
    spec: [
      { k: "Board", v: "ESP32-CAM AI-Thinker" },
      { k: "Transport", v: "Wi-Fi / HTTP" },
    ],
    stack: ["ESP32-CAM", "Arduino", "ESPAsyncWebServer", "ArduinoJson"],
    sections: [
      {
        heading: "What it does",
        body: [
          "Streams video over Wi-Fi from a cheap camera module, detects motion, grabs stills, and serves it all from a web page hosted on the device. No cloud in the middle.",
        ],
      },
    ],
  },

  "esp32-wifi-upload-to-screen": {
    title: "ESP32 Wi-Fi upload to screen",
    eyebrow: "Embedded display",
    role: "Personal project",
    summary:
      "An ESP32 that hosts its own upload page and renders whatever JPG you send it onto an ST7735 panel.",
    github: "https://github.com/dishishshawn/ESP32-WIFI-Upload-to-Screen",
    spec: [
      { k: "MCU", v: "ESP32" },
      { k: "Display", v: "ST7735" },
    ],
    stack: ["ESP32", "C++", "PlatformIO", "Embedded web server", "ST7735"],
    sections: [
      {
        heading: "What it does",
        body: [
          "Runs a small web server on the microcontroller, takes a JPG upload from a browser on the same network, decodes it, and draws it on the display. HTTP request to pixels, on a chip with no OS.",
        ],
      },
    ],
  },

  "kicad-st7735s-tft": {
    title: "KiCad ST7735S TFT library",
    eyebrow: "CAD library",
    role: "Personal project",
    summary:
      "A KiCad symbol and footprint for a 1.8-inch ST7735S TFT board, so I stop redrawing it every project.",
    github: "https://github.com/dishishshawn/kicad-st7735s-1.8in-tft",
    spec: [
      { k: "Tool", v: "KiCad" },
      { k: "Part", v: "ST7735S 1.8″ TFT" },
    ],
    stack: ["KiCad", "Symbol design", "Footprint creation"],
    sections: [
      {
        heading: "Why",
        body: [
          "This display shows up in a bunch of my projects, and every time I redrew the symbol and footprint. That&rsquo;s slow, and it&rsquo;s an easy way to get a pin number wrong and not find out until after fab. Doing it once fixed both.",
        ],
      },
    ],
  },

  "sign-language-ai": {
    title: "Sign-Language-AI",
    eyebrow: "Computer vision",
    role: "Personal project",
    summary:
      "Sign-language gesture recognition with a training pipeline, an inference script, and a desktop GUI for loading images and seeing results.",
    github: "https://github.com/dishishshawn/Sign-Language-AI",
    spec: [
      { k: "Model", v: "YOLOv8" },
      { k: "Interface", v: "Tkinter desktop app" },
    ],
    stack: ["Python", "YOLOv8", "OpenCV", "Tkinter", "NumPy"],
    sections: [
      {
        heading: "What it does",
        body: [
          "Both halves: training the gesture recognition model, and a simple desktop app that loads an image, runs inference, and shows the result, so someone who won&rsquo;t open a terminal can still use it.",
        ],
      },
    ],
  },

  "gold-fish": {
    title: "Gold.fish",
    eyebrow: "Full-stack web app",
    role: "Personal project",
    summary:
      "A spending tracker that renders your budget as the health of a digital fish tank.",
    github: "https://github.com/dishishshawn/Gold.fish",
    spec: [
      { k: "Frontend", v: "React" },
      { k: "Backend", v: "Node / Express" },
    ],
    stack: ["React", "Node.js", "Express", "JavaScript"],
    sections: [
      {
        heading: "What it does",
        body: [
          "Ties income and expenses to the state of the tank. It thrives or it doesn&rsquo;t. A number in a spreadsheet is easy to ignore. A dying fish isn&rsquo;t.",
        ],
      },
    ],
  },

  "maze-generator-solver": {
    title: "Maze generator &amp; solver",
    eyebrow: "Algorithms + GUI",
    role: "Personal project",
    summary:
      "Generates random mazes at a configurable size and visualizes how different frontier strategies search them.",
    github: "https://github.com/dishishshawn/Maze-Generator-Solver-Python",
    spec: [
      { k: "Language", v: "Python" },
      { k: "Interface", v: "Tkinter" },
    ],
    stack: ["Python", "Tkinter", "Threading"],
    sections: [
      {
        heading: "What it does",
        body: [
          "Builds a random maze and solves it while drawing the search live. Swap the frontier from a queue to a stack and BFS becomes DFS. Watching both run on the same maze makes the difference obvious.",
        ],
      },
    ],
  },

  "diet-tracker": {
    title: "Diet tracker",
    eyebrow: "Desktop app",
    role: "Personal project",
    summary:
      "A local desktop app for logging meals, workouts, and calories, with plots over the logged history.",
    github: "https://github.com/dishishshawn/diet-tracker",
    spec: [
      { k: "Language", v: "Python" },
      { k: "Storage", v: "SQLAlchemy" },
    ],
    stack: ["Python", "Tkinter", "Matplotlib", "SQLAlchemy"],
    sections: [
      {
        heading: "What it does",
        body: [
          "Logs meals and workouts to a local database and plots the history. Fully offline. One app for the GUI, storage, and plots.",
        ],
      },
    ],
  },
};
