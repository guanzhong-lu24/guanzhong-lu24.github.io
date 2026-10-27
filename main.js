// Keep the English page readable even when JavaScript is unavailable.
const translations = {
  en: {
    subtitle: 'Data Science',
    description: 'I’m a Data Science student.',
    majorLabel: 'Major',
    majorValue: 'Data Science',
    interestsLabel: 'Interests',
    interestsValue: 'Interested in machine learning, deep learning, and using programming to explore data.'
  },
  'zh-CN': {
    subtitle: '数据科学',
    description: '我是一名数据科学专业学生。',
    majorLabel: '专业',
    majorValue: '数据科学',
    interestsLabel: '学习兴趣',
    interestsValue: '对机器学习、深度学习，以及编程在数据分析中的应用感兴趣。'
  }
};

Object.assign(translations.en, {
  "skillsHeading": "Skills",
  "skillsIntro": "Practical experience and foundations I’m developing through coursework.",
  "skill1Title": "Linux & virtual machines",
  "skill1Text": "Hands-on practice with Ubuntu, VMware, basic shell commands and SSH connections.",
  "skill2Title": "Networking & HDFS",
  "skill2Text": "Practice checking IPv4 connectivity, hostname resolution, DataNode status and HDFS block replication.",
  "skill3Title": "Programming & databases",
  "skill3Text": "Learning Python, C++ and SQL, including introductory data preparation and relational database concepts.",
  "skill4Title": "Machine learning",
  "skill4Text": "Studying regression, classification, support vector machines, k-nearest neighbours, kernel methods and decision trees.",
  "projectsHeading": "Projects",
  "project1Context": "CSI205 · Group coursework · In progress",
  "project1Title": "Amazon Reviews Distributed Analysis",
  "project1Text": "A group project using HDFS and Spark to analyse Amazon Video Games review data. My work so far focuses on the worker environment, connectivity checks and experiment evidence.",
  "project1Point1": "Configured my Ubuntu worker environment and checked Java, Python, Hadoop and Spark versions.",
  "project1Point2": "Verified SSH, network connectivity and cluster hostname resolution.",
  "project1Point3": "Confirmed a healthy three-DataNode HDFS test, with two live block replicas and one stored on my worker node.",
  "project2Context": "ENT207 · Group concept project",
  "project2Title": "Touchscreen Monitoring for Edge Computers",
  "project2Text": "A group concept for an industrial equipment monitoring interface, exploring prioritised alarms, fault diagnosis and maintenance feedback. The work described here is at the design stage.",
  "project3Context": "CSI205 Lab · In progress",
  "project3Title": "Personal GitHub Pages Website",
  "project3Text": "Building a bilingual personal homepage with AI assistance using HTML, CSS and JavaScript. I created the GitHub repository and configured Pages publishing, and I’m preparing the customised page for upload.",
  "courseworkHeading": "Coursework",
  "courseworkIntro": "Topics I’m currently studying.",
  "course1Title": "Machine learning",
  "course1Text": "Regression, classification, model evaluation, SVMs, kNN, kernels and decision trees.",
  "course2Title": "Networking & distributed computing",
  "course2Text": "Network layers, TCP/UDP, IP addressing, virtual machines and HDFS/Spark environments.",
  "course3Title": "Database development & design",
  "course3Text": "SQL queries, PostgreSQL, relational tables, keys and database design foundations.",
  "course4Title": "Statistics & data analysis",
  "course4Text": "Simulation, sampling, standard error, confidence intervals and regression.",
  "course5Title": "C++ programming foundations",
  "course5Text": "Program structure, compilation, input/output, expressions and debugging basics."
});
Object.assign(translations['zh-CN'], {
  "skillsHeading": "技能",
  "skillsIntro": "通过课程与实验逐步积累的实践经验和基础知识。",
  "skill1Title": "Linux 与虚拟机",
  "skill1Text": "在实验中使用 Ubuntu、VMware、基础命令行和 SSH 连接。",
  "skill2Title": "网络与 HDFS",
  "skill2Text": "实践检查 IPv4 连通性、主机名解析、DataNode 状态和 HDFS 数据块副本。",
  "skill3Title": "编程与数据库",
  "skill3Text": "正在学习 Python、C++ 和 SQL，包括基础数据准备和关系型数据库概念。",
  "skill4Title": "机器学习",
  "skill4Text": "正在学习回归、分类、支持向量机、k 近邻、核方法和决策树。",
  "projectsHeading": "项目",
  "project1Context": "CSI205 · 小组课程项目 · 进行中",
  "project1Title": "Amazon 评论分布式分析",
  "project1Text": "使用 HDFS 和 Spark 分析 Amazon Video Games 评论数据的小组项目。目前我的工作主要是工作节点环境准备、连通性检查与实验证据整理。",
  "project1Point1": "配置自己的 Ubuntu 工作节点环境，核对 Java、Python、Hadoop 和 Spark 版本。",
  "project1Point2": "验证 SSH、网络连通性与集群主机名解析。",
  "project1Point3": "确认三个 DataNode 在线的小文件 HDFS 测试状态健康，存在两份在线副本，其中一份位于我的工作节点。",
  "project2Context": "ENT207 · 小组方案设计",
  "project2Title": "边缘计算设备触摸屏监控",
  "project2Text": "面向工业设备监控界面的小组概念项目，探索告警优先级、故障诊断和维护反馈。这里介绍的工作处于设计阶段。",
  "project3Context": "CSI205 实验 · 进行中",
  "project3Title": "GitHub Pages 个人网站",
  "project3Text": "在 AI 辅助下，使用 HTML、CSS 和 JavaScript 制作中英文个人主页。已创建 GitHub 仓库并配置 Pages 发布，正在准备上传定制网页。",
  "courseworkHeading": "课程学习",
  "courseworkIntro": "目前正在学习的课程主题。",
  "course1Title": "机器学习",
  "course1Text": "回归、分类、模型评估、支持向量机、k 近邻、核方法与决策树。",
  "course2Title": "网络与分布式计算",
  "course2Text": "网络分层、TCP/UDP、IP 地址、虚拟机和 HDFS/Spark 环境。",
  "course3Title": "数据库开发与设计",
  "course3Text": "SQL 查询、PostgreSQL、关系表、主键外键与数据库设计基础。",
  "course4Title": "统计与数据分析",
  "course4Text": "模拟、抽样、标准误差、置信区间与回归。",
  "course5Title": "C++ 编程基础",
  "course5Text": "程序结构、编译、输入输出、表达式与基础调试。"
});

const languageButton = document.querySelector('#language-toggle');
let currentLanguage = 'en';

languageButton.hidden = false;
languageButton.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'zh-CN' : 'en';
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = translations[currentLanguage][element.dataset.i18n];
  });
  const showEnglishButton = currentLanguage === 'zh-CN';
  languageButton.textContent = showEnglishButton ? 'English' : '中文';
  languageButton.lang = showEnglishButton ? 'en' : 'zh-CN';
  languageButton.setAttribute('aria-label', showEnglishButton ? 'Switch to English' : '切换为中文');
});
