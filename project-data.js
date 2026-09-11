/* Case-study content. Rendered by project-detail.js.
   Strings may contain inline markup (subscripts, <b>, <code>). */

const DEFAULT_ALTIUM_VIEWER = {
  title: "Interactive PCB Viewer",
  caption:
    "Rotate the board directly on this page with a 3D-first Altium viewer.",
  projectSrc: "", // Public ZIP/RAR/7z archive URL for a PCB project or manufacturing package.
  projectToken: "", // Token from Altium's "Embed this design anywhere on the web" snippet.
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
      "A MATLAB toolkit that turned the group&rsquo;s hand-fit X-ray diffraction analysis into a repeatable pipeline &mdash; and ships as an installer so everyone runs the same build.",
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
      { k: "Release", v: "v1.1.0 — July 2026" },
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
          "Every thin film the group grows has to be judged on the same three questions: is it crystalline, how strained is it, and how sharp is the interface. The measurements that answer them &mdash; rocking curves, &theta;&ndash;2&theta; scans, reflectivity, reciprocal-space maps &mdash; all end in the same place. Somebody fits peaks.",
          "That fitting was manual. It was slow, it had to be redone from scratch whenever a scan was reprocessed, and two people analyzing the same sample could report film-quality numbers that did not quite line up. The instrument was not the bottleneck. The analysis was.",
        ],
      },
      {
        heading: "What it does",
        list: [
          "Reads <b>eight instrument formats</b> without a conversion step: PANalytical XRDML point and area scans, Philips X00, and Rigaku SmartLab <code>.hgx</code>, <code>.ras</code>, <code>.raw</code> and <code>.txt</code>.",
          "Runs the standard scan types &mdash; &theta;&ndash;2&theta;, rocking curve, &phi; scan, X-ray reflectivity, and reciprocal-space maps.",
          "Detects peaks using <b>data-driven automatic prominence selection</b>, so the detection threshold is derived from the scan rather than being a number somebody guessed at.",
          "Derives lattice parameters by <b>Nelson&ndash;Riley</b> extrapolation, and identifies materials from them with <code>identifyMaterial</code>.",
          "Fits XRR slab models with <b>Parratt reflectivity and N&eacute;vot&ndash;Croce roughness</b> &mdash; a seeded multi-start over thickness, density and roughness that reports a standard error on each parameter, not just a best-fit line.",
          "<code>analyzeStrainRSM</code> locates peaks in a reciprocal-space map and returns in-plane and out-of-plane lattice parameters, biaxial strain, the relaxed lattice parameter, and composition.",
          "Emits publication-ready figures in one consistent style.",
        ],
      },
      {
        heading: "Why reproducibility was the point",
        body: [
          "A film-quality number is only worth reporting if it means the same thing next month, and in somebody else&rsquo;s hands. Most of the engineering went there rather than into the math.",
        ],
        list: [
          "One figure style across the group, matched to Schwaigert et al., <i>J. Vac. Sci. Technol. A</i> <b>41</b>, 022703 (2023), so plots produced by different people are directly comparable.",
          "Every optional-toolbox code path has a <b>pure-MATLAB fallback</b>. A result does not silently depend on which licenses happen to be installed on the machine that produced it.",
          "A <code>runtests</code> suite covers the analysis paths, so a refactor that quietly changes a fitted number gets caught instead of shipped.",
          "v1.1.0 ships a <b>Windows installer</b> that pulls the matching MATLAB Runtime on first launch. Labmates without a MATLAB license run the identical build &mdash; the tool stopped being something only I could run.",
        ],
      },
      {
        heading: "How it is organized",
        body: [
          "83 MATLAB files under a single <code>+xrdc</code> package: <code>+io</code> for the instrument readers, <code>+lattice</code> for d-spacing, Nelson&ndash;Riley and material identification, <code>+peaks</code> for detection and fitting, <code>+rsm</code> for reciprocal-space geometry and strain, <code>+signal</code> for smoothing and background subtraction, and <code>+plot</code> for the figure style. Splitting I/O from the physics is what made adding the fifth and sixth file formats cheap.",
        ],
      },
      {
        heading: "Credit and honest scope",
        body: [
          "XRDC is a MATLAB port of Dr. Tassilo Heeg&rsquo;s Delphi XRDC tool (FZJ/ISG1-IT), and the core algorithms are his. The port, the XRR slab fitting, the RSM strain and composition work, the test suite, and the packaged release are mine.",
        ],
        caveat:
          "Scope as of v1.1.0: the RSM geometry is validated against real TiO<sub>2</sub> data, while the strain and composition path is validated on synthetic data. A known PbTiO<sub>3</sub>-versus-PZT ranking limitation in (00l) material identification is documented in the repository rather than papered over.",
      },
    ],
    media: [
      {
        image: "assets/research/xrdc-ui.png",
        alt: "XRDC scan analyzer interface",
        text: "XRDC scan analyzer — rocking curve and reciprocal-space-map workflows.",
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
      "Growing a perovskite oxide stack on silicon, then using diffraction, transport, and optical measurement together to judge whether the crystal, the strain, and the interfaces are actually good.",
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
          "BaTiO<sub>3</sub> is a ferroelectric perovskite. SrTiO<sub>3</sub> is the template layer that makes it possible to grow that perovskite on silicon at all. Getting the stack epitaxial on Si is what would let an oxide functional layer sit on the same substrate the rest of electronics is built on.",
          "The difficulty is the interface. Lattice mismatch and interface chemistry decide whether the film on top is a single crystal under a known strain state or something considerably more disordered &mdash; and that distinction is not visible without measuring it carefully.",
        ],
      },
      {
        heading: "What I do on it",
        list: [
          "Grow the heterostructures by vacuum deposition, and run the deposition hardware itself.",
          "Measure crystalline quality and strain state by high-resolution X-ray diffraction: <b>rocking curves</b> for mosaic spread, <b>reciprocal-space maps</b> for in-plane and out-of-plane lattice parameters and the degree of relaxation.",
          "Cross-check structural conclusions against <b>transport and optical measurements</b> on the same samples, so a claim about film quality does not rest on diffraction alone.",
          "Reduce all of the diffraction data through XRDC, which keeps the peak fitting consistent from sample to sample and between people.",
        ],
      },
      {
        heading: "Using the measurements against each other",
        body: [
          "A rocking curve width says something about mosaic spread but nothing about strain. A reciprocal-space map separates the in-plane from the out-of-plane lattice parameter, and shows whether the film is coherently strained to the substrate or has relaxed. Transport and optical measurements are sensitive to things diffraction is blind to &mdash; carriers and defects that do not move the average lattice.",
          "Agreement between the three is the useful result. Disagreement is the interesting one, because it usually means the structural picture is incomplete.",
        ],
        caveat:
          "This project is active and unpublished. I have kept this page to methods and approach rather than putting preliminary numbers on the public web.",
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
        text: "Looking through the chamber viewport at the deposition hardware. The iridescence on the internals is thin-film interference — deposited material on everything the plume reaches.",
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
      "Custom boards, RTOS firmware, and a single CAN bus carrying every sensor on an autonomous ground vehicle &mdash; plus the bridge that made that bus debuggable.",
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
          "An autonomous ground vehicle has to move power, sensor data, and a safety path around a frame that vibrates, and it has to fail safe the instant somebody hits the stop button. I worked the board-level and firmware side of that: the boards that regulate and condition, the firmware that schedules, and the bus that ties every sensor together.",
        ],
      },
      {
        heading: "Boards",
        list: [
          "Designed custom PCBs for <b>power regulation, signal conditioning, and hardware safety interlocks</b>.",
          "Took each board from schematic capture through layout, assembly, and system-level verification &mdash; so the board that came back from fab was also the board I brought up and debugged.",
          "Implemented the interlocks in hardware rather than firmware, so the stop path does not depend on software still being alive to honor it.",
        ],
      },
      {
        heading: "Firmware",
        list: [
          "Wrote real-time control firmware in C/C++ on <b>STM32 (ARM Cortex-M)</b>.",
          "Ran it under an <b>RTOS with prioritized task scheduling</b>, so control-loop timing is not at the mercy of slower housekeeping work sharing the same core.",
        ],
      },
      {
        heading: "Integration",
        list: [
          "Put <b>LiDAR, cameras, GPS, IMU, encoders, and the e-stop on a single CAN bus</b>, which keeps the wiring tractable but means bus behavior becomes the thing that has to be understood.",
          "Built a <b>CAN-to-USB bridge</b> so the onboard PC could watch live bus traffic. That is what turned intermittent faults into something reproducible rather than something argued about at 2 a.m.",
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
      "A compact STM32 board that puts the vehicle&rsquo;s CAN bus in front of the onboard PC, so traffic can be watched live and a fault can be reproduced instead of guessed at.",
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
          "Once every sensor on the vehicle shares one CAN bus, the bus becomes the place faults hide. A dropped frame, a misconfigured bit rate, or one node talking over another all present the same way from the outside: the robot behaves strangely and nobody can say why.",
          "OpenCAN is the instrument for that. It bridges the bus to USB so the onboard PC can watch every frame as it happens, which makes an intermittent fault something you can capture and replay rather than something you theorize about.",
        ],
      },
      {
        heading: "The board",
        list: [
          "Compact STM32-based design, sized to mount inside the vehicle rather than sit on a bench.",
          "CAN transceiver front end to USB, presenting the bus to the host PC.",
          "Laid out in KiCad; full schematic and 3D board are viewable on this page.",
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
      "AI document intelligence for oil and gas land services &mdash; an extraction pipeline built so that its output can be checked, measured, and trusted.",
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
          "Land services runs on documents &mdash; deeds, leases, assignments &mdash; and the facts inside them have to come out exactly, with a pointer back to where each one came from. An extraction that is usually right is not useful on its own. What matters is knowing <i>which</i> fields to trust.",
        ],
      },
      {
        heading: "The pipeline",
        list: [
          "Built the LLM document-extraction and verification pipeline end to end: <b>OCR, schema validation, and citation grounding</b>.",
          "Schema validation constrains what each field is allowed to be, so a malformed extraction fails loudly at the boundary instead of flowing downstream into a report.",
          "Citation grounding ties every extracted value back to its location in the source document, so a reviewer verifies a field in seconds instead of rereading the instrument.",
        ],
      },
      {
        heading: "Measuring it",
        list: [
          "Wrote an <b>offline evaluation harness</b> tracking per-field precision and recall against a hand-labeled test set.",
          "Per-field rather than per-document, because the fields do not fail at the same rate and a single aggregate score hides exactly the ones that matter.",
          "That harness is what makes prompt and model changes decidable: a change either moves the numbers on the test set or it does not ship.",
        ],
      },
      {
        heading: "Running it at volume",
        list: [
          "<b>BullMQ/Redis batch layer with idempotent workers</b>, so a retry after a crash does not duplicate work or double-write results.",
          "Automated QA that catches drift, duplicates, and corrupt inputs before they reach a person.",
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
      "Led the electrical team on a tele-operated competition robot: power rails, signal decoding, and the design reviews that kept several people&rsquo;s boards compatible with each other.",
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
          "This was the first project where I owned an area rather than a board. Running design reviews and test phases for a team means the hard part stops being any one schematic; it becomes making sure several people&rsquo;s boards agree with each other about voltages, connectors, and what is supposed to happen when the supply sags.",
        ],
      },
      {
        heading: "Power",
        list: [
          "Designed <b>multi-voltage power rails</b> feeding logic, sensing, and actuation from a shared source.",
          "Designed buck converters and brought output <b>ripple under 5%</b>, measured on the bench rather than assumed from the datasheet.",
        ],
      },
      {
        heading: "Sensing",
        list: [
          "Implemented <b>IR and RF signal decoding</b> for the robot&rsquo;s sensing path.",
          "The infrared board used TSOP receivers on a Raspberry Pi Pico, decoding in real time and passing results back to the main PC.",
        ],
      },
      {
        heading: "Boards from this project",
        list: [
          '<a href="project.html?project=storm-control-board">STORM control board</a> &mdash; the main subsystem I/O interface.',
          '<a href="project.html?project=5v-buck-converter">5 V buck converter</a> &mdash; the step-down stage for onboard electronics.',
          '<a href="project.html?project=infrared-sensor-board">Infrared sensor board</a> &mdash; TSOP receivers and real-time decoding.',
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
          "The corpus was 1.6 million records and the labeling budget was a few people&rsquo;s time. Labeling at random would have spent that budget on examples the model already handled, so the question was not which architecture to use &mdash; it was which examples were worth a human&rsquo;s attention.",
        ],
      },
      {
        heading: "Approach",
        list: [
          "Fine-tuned <b>BERT</b> for relevance classification on noisy social-media-style text.",
          "Used <b>uncertainty sampling</b> to select the next labeling batch from the examples the current model was least confident about, so each labeling round bought more than the one before it.",
          "Ran the loop as an experiment workflow &mdash; train, sample, label, retrain &mdash; and compared model variants inside it.",
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
      "A Tamagotchi-style handheld on a custom PCB: ESP32, ST7735 LCD, physical buttons, and EEPROM-backed state that survives a power cycle.",
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
          "A handheld virtual pet, built as a real product rather than a dev board with wires coming out of it: custom PCB, enclosure, battery, and a gameplay loop that keeps running whether or not the device is plugged in.",
        ],
      },
      {
        heading: "Notes",
        list: [
          "Persistent pet stats stored in EEPROM, so state survives a power cycle.",
          "Display control and button handling written against a LiPo power budget rather than a bench supply.",
          "Custom PCB and enclosure workflow &mdash; schematic, layout, and fit all had to agree.",
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
      "A Raspberry Pi Pico board using TSOP receivers to detect, decode, and stream infrared signals back to the robot&rsquo;s main PC in real time.",
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
          "Captures infrared signals with TSOP receivers, decodes them on the Pico, and hands the decoded result to the robot&rsquo;s main computer over serial &mdash; fast enough that the robot can act on what it saw rather than on what it saw a moment ago.",
        ],
      },
      {
        heading: "Notes",
        list: [
          "Decoding runs on the board, so the host receives events rather than a raw waveform to parse.",
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
          "Sits between the robot&rsquo;s subsystems and its microcontroller, centralizing the I/O so that adding or changing a subsystem is a connector decision rather than a rewiring job. Handles mixed digital and analog signals on one board.",
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
          "Steps the robot&rsquo;s main supply down to the 5 V rail the onboard electronics run from. The layout work mattered more than the schematic here &mdash; switching converters are where placement and return paths decide whether the measured ripple matches the simulation.",
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
          "Streams video over Wi-Fi from an inexpensive camera module, detects motion, captures stills, and serves it all from a web interface running on the device itself &mdash; no cloud service in the middle.",
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
          "Runs a small web server directly on the microcontroller, accepts a JPG upload from a browser on the same network, decodes it, and draws it to the attached display &mdash; the whole path from HTTP request to pixels handled on a device with no operating system.",
        ],
      },
    ],
  },

  "kicad-st7735s-tft": {
    title: "KiCad ST7735S TFT library",
    eyebrow: "CAD library",
    role: "Personal project",
    summary:
      "A KiCad symbol and footprint for a 1.8-inch ST7735S TFT display board, so the part stops being redrawn from scratch each time.",
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
          "This display shows up in several of my projects, and every time it did, the symbol and footprint got redrawn &mdash; which is both slow and a good way to introduce a pin-numbering mistake that only surfaces after fab. Packaging it once removed both problems.",
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
          "Covers both halves of the workflow: training a gesture recognition model, and a simple desktop application that loads an image, runs inference, and shows the classification &mdash; so the model is usable by someone who is not going to open a terminal.",
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
          "Ties income and expense entries to a visual state &mdash; the tank thrives or it does not &mdash; on the theory that a number in a spreadsheet is easy to ignore and a dying fish is not.",
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
          "Builds a random maze, then solves it while drawing the search as it happens. Swapping the frontier between a queue and a stack turns breadth-first into depth-first, and watching the two explore the same maze makes the difference between them concrete rather than abstract.",
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
          "Logs meals and workouts to a local database and plots the history, entirely offline. One app covering the GUI, the persistence, and the plotting.",
        ],
      },
    ],
  },
};
