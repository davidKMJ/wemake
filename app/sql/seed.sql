-- Insert categories
INSERT INTO categories (name, description, created_at, updated_at) VALUES 
('Productivity', 'Tools and apps that help you get more done', NOW(), NOW()),
('Developer Tools', 'Software and services for developers', NOW(), NOW()),
('AI & Machine Learning', 'Artificial intelligence and ML applications', NOW(), NOW()),
('Design', 'Design tools and creative applications', NOW(), NOW()),
('Marketing', 'Marketing and growth tools', NOW(), NOW()),
('Finance', 'Financial and fintech applications', NOW(), NOW()),
('Education', 'Learning and educational platforms', NOW(), NOW()),
('Health & Fitness', 'Health, wellness, and fitness apps', NOW(), NOW()),
('Entertainment', 'Gaming, media, and entertainment apps', NOW(), NOW()),
('Communication', 'Messaging, video, and collaboration tools', NOW(), NOW());

-- Insert topics for community posts
INSERT INTO topics (name, slug, created_at) VALUES 
('Product Development', 'product-development', NOW()),
('Tech News', 'tech-news', NOW()),
('Startup Advice', 'startup-advice', NOW()),
('Design Tips', 'design-tips', NOW()),
('Marketing Strategies', 'marketing-strategies', NOW()),
('Developer Resources', 'developer-resources', NOW()),
('AI & ML', 'ai-ml', NOW()),
('Funding & Investment', 'funding-investment', NOW()),
('Remote Work', 'remote-work', NOW()),
('Career Growth', 'career-growth', NOW());

-- Insert products
INSERT INTO products (name, tagline, description, how_it_works, icon, url, stats, profile_id, category_id, created_at, updated_at) VALUES 
('TaskFlow', 'Streamline your workflow with AI-powered task management', 'TaskFlow is a revolutionary project management tool that uses artificial intelligence to automatically prioritize tasks, suggest optimal work schedules, and predict project completion times. Built for modern teams who want to work smarter, not harder.', 'Simply connect your existing tools (Slack, Gmail, Calendar), and TaskFlow analyzes your work patterns to create personalized productivity recommendations. The AI learns from your behavior and continuously optimizes your workflow.', 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop', 'https://taskflow.ai', '{"views": 15420, "reviews": 89, "upvotes": 234}', '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 1, NOW(), NOW()),

('CodeCraft', 'The ultimate developer productivity suite', 'CodeCraft combines code analysis, automated testing, and intelligent refactoring suggestions into one powerful platform. It helps developers write better code faster while maintaining high quality standards.', 'Install the CodeCraft extension in your IDE, and it automatically analyzes your codebase. Get real-time suggestions for improvements, automated test generation, and performance optimizations as you code.', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=64&h=64&fit=crop', 'https://codecraft.dev', '{"views": 22100, "reviews": 156, "upvotes": 445}', '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 2, NOW(), NOW()),

('DesignGenie', 'AI-powered design assistant for non-designers', 'DesignGenie makes professional design accessible to everyone. Simply describe what you want to create, and our AI generates beautiful designs, logos, and marketing materials in seconds.', 'Upload your brand assets or describe your vision, and DesignGenie creates multiple design options. Choose your favorite, customize it further, and download high-resolution files ready for any platform.', 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=64&h=64&fit=crop', 'https://designgenie.co', '{"views": 18900, "reviews": 78, "upvotes": 312}', '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 4, NOW(), NOW()),

('GrowthHack Pro', 'Data-driven marketing automation platform', 'GrowthHack Pro helps startups and enterprises scale their marketing efforts through intelligent automation, A/B testing, and predictive analytics. Turn your marketing data into actionable insights.', 'Connect your marketing channels, set up conversion goals, and let GrowthHack Pro optimize your campaigns automatically. Get detailed analytics and recommendations to maximize your ROI.', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=64&h=64&fit=crop', 'https://growthhackpro.com', '{"views": 12300, "reviews": 45, "upvotes": 189}', '778224df-bcdd-45a0-a102-1c8208bab70e', 5, NOW(), NOW()),

('FinTech Flow', 'Next-generation personal finance management', 'FinTech Flow combines budgeting, investing, and financial planning into one intuitive platform. Get personalized financial advice powered by AI and machine learning algorithms.', 'Link your bank accounts securely, and FinTech Flow automatically categorizes transactions, creates budgets, and suggests investment opportunities based on your financial goals and risk tolerance.', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=64&h=64&fit=crop', 'https://fintechflow.io', '{"views": 25600, "reviews": 134, "upvotes": 567}', 'f58e0e96-4d20-4441-b86e-e641fd18dd68', 6, NOW(), NOW()),

('LearnPath', 'Personalized learning platform for tech skills', 'LearnPath creates custom learning paths based on your career goals and current skills. Master in-demand technologies through interactive courses, coding challenges, and real-world projects.', 'Take a skills assessment, set your career goals, and LearnPath creates a personalized curriculum. Track your progress, earn certifications, and connect with mentors in your field.', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=64&h=64&fit=crop', 'https://learnpath.edu', '{"views": 18700, "reviews": 92, "upvotes": 298}', '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 7, NOW(), NOW()),

('FitAI', 'AI-powered personal trainer and nutrition coach', 'FitAI provides personalized workout plans and nutrition guidance based on your fitness goals, body type, and lifestyle. Get 24/7 coaching and motivation to achieve your health objectives.', 'Answer questions about your fitness goals and preferences, and FitAI creates a customized plan. Track your workouts, log meals, and get real-time feedback and adjustments to your program.', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=64&h=64&fit=crop', 'https://fitai.app', '{"views": 14200, "reviews": 67, "upvotes": 234}', '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 8, NOW(), NOW()),

('GameForge', 'No-code game development platform', 'GameForge makes game development accessible to everyone. Create stunning 2D and 3D games without coding using our visual editor and extensive asset library.', 'Choose from templates or start from scratch. Use the drag-and-drop editor to design levels, add characters, and create gameplay mechanics. Publish your games to multiple platforms with one click.', 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=64&h=64&fit=crop', 'https://gameforge.io', '{"views": 32100, "reviews": 178, "upvotes": 456}', '778224df-bcdd-45a0-a102-1c8208bab70e', 9, NOW(), NOW()),

('TeamSync', 'Advanced collaboration and communication hub', 'TeamSync brings all your team communication, project management, and file sharing into one unified platform. Boost productivity with intelligent features and seamless integrations.', 'Create workspaces for different projects, invite team members, and start collaborating. Use video calls, screen sharing, file sharing, and task management all in one place with powerful search and organization features.', 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=64&h=64&fit=crop', 'https://teamsync.work', '{"views": 19800, "reviews": 112, "upvotes": 345}', 'f58e0e96-4d20-4441-b86e-e641fd18dd68', 10, NOW(), NOW()),

('DataViz Pro', 'Create stunning data visualizations in minutes', 'DataViz Pro transforms complex data into beautiful, interactive visualizations. Perfect for analysts, marketers, and business leaders who need to communicate insights effectively.', 'Upload your data or connect to databases, choose from hundreds of chart templates, and customize your visualizations. Export to presentations, reports, or embed in websites and dashboards.', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=64&h=64&fit=crop', 'https://datavizpro.com', '{"views": 16700, "reviews": 89, "upvotes": 267}', '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 3, NOW(), NOW());

-- Insert product upvotes
INSERT INTO product_upvotes (product_id, profile_id) VALUES 
(1, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(1, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(1, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(2, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(2, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(3, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(3, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(3, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(4, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(4, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(4, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(5, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(5, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(5, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(6, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(6, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(6, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(7, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(7, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(7, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(8, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(8, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(8, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(9, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(9, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(9, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(10, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(10, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(10, '778224df-bcdd-45a0-a102-1c8208bab70e');

-- Insert reviews
INSERT INTO reviews (product_id, profile_id, rating, review, created_at, updated_at) VALUES 
(1, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 5, 'TaskFlow has completely transformed how I manage my projects. The AI suggestions are spot-on and have saved me hours every week. Highly recommend!', NOW(), NOW()),
(1, '778224df-bcdd-45a0-a102-1c8208bab70e', 4, 'Great tool for productivity. The interface is clean and intuitive. Only minor issue is the mobile app could be better.', NOW(), NOW()),
(1, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', 5, 'This is exactly what our team needed. The AI-powered scheduling has improved our efficiency by 40%. Worth every penny!', NOW(), NOW()),
(2, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 5, 'CodeCraft is a game-changer for developers. The automated testing features alone make it worth it. Code quality has improved significantly.', NOW(), NOW()),
(2, '778224df-bcdd-45a0-a102-1c8208bab70e', 4, 'Solid developer tool with great features. The refactoring suggestions are helpful, though sometimes overly aggressive.', NOW(), NOW()),
(3, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 5, 'DesignGenie is incredible! As a developer with no design skills, this tool has helped me create professional-looking materials for my projects.', NOW(), NOW()),
(3, '778224df-bcdd-45a0-a102-1c8208bab70e', 4, 'Good AI design tool. The quality of generated designs is impressive, though customization options could be more extensive.', NOW(), NOW()),
(3, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', 5, 'Perfect for startups on a budget. We''ve created all our marketing materials using DesignGenie. Saves us thousands on design costs.', NOW(), NOW()),
(4, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 4, 'GrowthHack Pro has good analytics and automation features. Helped us optimize our marketing campaigns effectively.', NOW(), NOW()),
(4, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 5, 'Excellent marketing automation platform. The A/B testing features are particularly useful. ROI has improved significantly.', NOW(), NOW()),
(4, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', 4, 'Solid tool for marketing automation. The predictive analytics are helpful, though the learning curve is a bit steep.', NOW(), NOW()),
(5, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 5, 'FinTech Flow has revolutionized my personal finance management. The AI insights are incredibly accurate and helpful.', NOW(), NOW()),
(5, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 4, 'Great financial planning tool. The budgeting features are intuitive and the investment suggestions are well-researched.', NOW(), NOW()),
(5, '778224df-bcdd-45a0-a102-1c8208bab70e', 5, 'Best personal finance app I''ve used. The security features give me confidence, and the insights are valuable.', NOW(), NOW()),
(6, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 5, 'LearnPath is perfect for career development. The personalized learning paths are exactly what I needed to advance my skills.', NOW(), NOW()),
(6, '778224df-bcdd-45a0-a102-1c8208bab70e', 4, 'Good learning platform with quality content. The progress tracking is helpful, though more interactive elements would be nice.', NOW(), NOW()),
(6, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', 5, 'Excellent platform for upskilling. The mentor connections have been invaluable for my career growth.', NOW(), NOW()),
(7, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 4, 'FitAI provides good workout plans and nutrition advice. The AI recommendations are personalized and effective.', NOW(), NOW()),
(7, '778224df-bcdd-45a0-a102-1c8208bab70e', 5, 'Love this app! The workout plans are challenging but achievable. The nutrition tracking features are comprehensive.', NOW(), NOW()),
(7, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', 4, 'Solid fitness app with good AI features. The progress tracking motivates me to stay consistent.', NOW(), NOW()),
(8, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 5, 'GameForge makes game development accessible to everyone. Created my first game in just a weekend!', NOW(), NOW()),
(8, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 4, 'Great no-code game development platform. The visual editor is intuitive, though more advanced features would be welcome.', NOW(), NOW()),
(8, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', 5, 'Perfect for indie developers. The asset library is extensive and the publishing process is seamless.', NOW(), NOW()),
(9, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 5, 'TeamSync has improved our team collaboration significantly. All-in-one solution that actually works well.', NOW(), NOW()),
(9, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 4, 'Good collaboration tool with solid features. The video calling quality is excellent, though file sharing could be faster.', NOW(), NOW()),
(9, '778224df-bcdd-45a0-a102-1c8208bab70e', 5, 'Essential tool for remote teams. The search functionality is powerful and saves us time finding information.', NOW(), NOW()),
(10, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 5, 'DataViz Pro creates stunning visualizations quickly. Perfect for presentations and reports. Highly recommend!', NOW(), NOW()),
(10, '778224df-bcdd-45a0-a102-1c8208bab70e', 4, 'Great data visualization tool. The templates are professional and the customization options are extensive.', NOW(), NOW()),
(10, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', 5, 'DataViz Pro has transformed how we present data to stakeholders. The interactive features are impressive.', NOW(), NOW());

-- Insert community posts
INSERT INTO posts (topic_id, title, content, upvotes, profile_id, created_at, updated_at) VALUES 
(1, 'The Future of Product Development: AI-Powered Tools', 'As we move into 2024, I''m seeing incredible advances in AI-powered product development tools. From automated testing to intelligent code generation, these tools are changing how we build products. What are your thoughts on this trend?', 23, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', NOW(), NOW()),
(1, 'Building User-Centric Products: Lessons Learned', 'After 5 years in product management, I''ve learned that the key to successful products is truly understanding your users. Here are the top 10 lessons I wish I knew when I started...', 45, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', NOW(), NOW()),
(2, 'Latest Tech News: OpenAI Releases GPT-5', 'OpenAI has just announced GPT-5 with significant improvements in reasoning and multimodal capabilities. This could revolutionize how we interact with AI systems. What do you think this means for developers?', 67, '778224df-bcdd-45a0-a102-1c8208bab70e', NOW(), NOW()),
(2, 'Apple''s New M4 Chip: Performance Analysis', 'The new M4 chip shows impressive performance gains, especially in AI workloads. Here''s my detailed analysis of the benchmarks and what this means for developers and content creators.', 34, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', NOW(), NOW()),
(3, 'Startup Funding: What Investors Really Look For', 'Having raised $2M for my startup, I want to share what investors actually care about. It''s not just about the idea - it''s about execution, market size, and team. Here''s my complete guide...', 89, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', NOW(), NOW()),
(3, 'From Idea to MVP: A 30-Day Challenge', 'I''m challenging myself to build and launch an MVP in 30 days. Follow along as I document the entire process, from ideation to launch. Day 1: Validating the problem...', 56, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', NOW(), NOW()),
(4, 'Design System Best Practices for 2024', 'Creating a consistent design system is crucial for product success. Here are the latest best practices, including accessibility, dark mode, and responsive design considerations.', 78, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', NOW(), NOW()),
(4, 'Color Psychology in UI Design', 'Colors have a powerful impact on user behavior and emotions. Let me break down the psychology behind different colors and how to use them effectively in your designs.', 42, '778224df-bcdd-45a0-a102-1c8208bab70e', NOW(), NOW()),
(5, 'Growth Hacking Strategies That Actually Work', 'After growing 3 startups to 7-figure revenue, here are the growth hacking strategies that consistently deliver results. No fluff, just proven tactics...', 91, '778224df-bcdd-45a0-a102-1c8208bab70e', NOW(), NOW()),
(5, 'Content Marketing: The Complete Guide', 'Content marketing isn''t just about blogging. It''s about creating valuable content across all channels. Here''s my comprehensive guide to building a content strategy that drives growth.', 63, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', NOW(), NOW()),
(6, 'Essential Developer Tools for 2024', 'The developer tooling landscape is constantly evolving. Here are the essential tools every developer should know about, from AI coding assistants to performance monitoring.', 112, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', NOW(), NOW()),
(6, 'Building Scalable APIs: Best Practices', 'Designing APIs that can handle millions of requests requires careful planning. Here are the best practices I''ve learned from building APIs at scale...', 87, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', NOW(), NOW()),
(7, 'Machine Learning in Production: Common Pitfalls', 'Deploying ML models to production is challenging. Here are the most common pitfalls I''ve encountered and how to avoid them. From data drift to model monitoring...', 74, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', NOW(), NOW()),
(7, 'The AI Revolution: What It Means for Jobs', 'AI is transforming industries, but what does this mean for job security? I''ve analyzed the data and here''s what I found about which jobs are safe and which are at risk.', 156, '778224df-bcdd-45a0-a102-1c8208bab70e', NOW(), NOW()),
(8, 'Venture Capital Trends: What''s Hot in 2024', 'The VC landscape is shifting. Here''s what investors are looking for in 2024, from climate tech to AI applications. Plus, tips for getting your startup funded.', 98, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', NOW(), NOW()),
(8, 'Bootstrapping vs. VC: Which Path to Choose?', 'Should you bootstrap or raise VC funding? Both paths have pros and cons. Here''s my analysis based on 10 years in the startup world...', 71, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', NOW(), NOW()),
(9, 'Remote Work: Building Culture from Afar', 'Building a strong company culture with a remote team is challenging but possible. Here are the strategies that have worked for our distributed team of 50+ people.', 83, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', NOW(), NOW()),
(9, 'The Future of Work: Hybrid Models', 'Hybrid work is here to stay, but how do we make it work effectively? Here''s my framework for creating successful hybrid work environments.', 59, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', NOW(), NOW()),
(10, 'Career Growth: From Developer to CTO', 'I''ve helped 50+ developers advance their careers. Here''s the roadmap from junior developer to CTO, including the skills you need and the mistakes to avoid.', 127, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', NOW(), NOW()),
(10, 'Negotiating Your Tech Salary: A Complete Guide', 'Salary negotiation is a skill every tech professional should master. Here''s my step-by-step guide to negotiating the salary you deserve...', 94, '778224df-bcdd-45a0-a102-1c8208bab70e', NOW(), NOW());

-- Insert post upvotes
INSERT INTO post_upvotes (post_id, profile_id) VALUES 
(1, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(1, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(1, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(2, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(2, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(2, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(3, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(3, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(3, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(4, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(4, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(4, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(5, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(5, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(5, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(6, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(6, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(6, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(7, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(7, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(7, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(8, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(8, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(8, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(9, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(9, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(9, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(10, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(10, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(10, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(11, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(11, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(11, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(12, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(12, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(12, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(13, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(13, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(13, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(14, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(14, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(14, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(15, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(15, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(15, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(16, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(16, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(16, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(17, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(17, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(17, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(18, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(18, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(18, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(19, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(19, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(19, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(20, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(20, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(20, 'f58e0e96-4d20-4441-b86e-e641fd18dd68');

-- Insert jobs
INSERT INTO jobs (position, overview, responsibilities, qualifications, benefits, skills, company_name, company_logo, company_location, apply_url, job_type, location, salary_range, created_at, updated_at) VALUES 
('Senior Full-Stack Developer', 'Join our innovative team building the next generation of AI-powered productivity tools. We''re looking for a passionate developer who loves clean code and cutting-edge technology.', 'Design and implement scalable web applications using React, Node.js, and PostgreSQL. Collaborate with product managers and designers to create exceptional user experiences. Lead technical decisions and mentor junior developers.', '5+ years of experience with React and Node.js. Strong understanding of database design and API development. Experience with cloud platforms (AWS/GCP) and containerization. Excellent communication skills and team collaboration.', 'Competitive salary, equity options, health insurance, flexible work hours, remote work options, professional development budget, top-tier equipment, unlimited PTO', 'React, Node.js, TypeScript, PostgreSQL, AWS, Docker, Git', 'TechFlow Inc.', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop', 'San Francisco, CA', 'https://techflow.com/careers/senior-dev', 'full-time', 'hybrid', '$150,000 - $200,000', NOW(), NOW()),

('Product Marketing Manager', 'Drive growth and user acquisition for our suite of developer tools. You''ll be responsible for creating compelling marketing campaigns and building our brand in the developer community.', 'Develop and execute go-to-market strategies for new product launches. Create compelling content for various channels including blog posts, social media, and webinars. Analyze marketing metrics and optimize campaigns for better performance.', '3+ years of experience in product marketing, preferably in B2B SaaS. Strong writing and communication skills. Experience with marketing analytics tools and CRM systems. Understanding of developer tools and workflows.', 'Competitive salary, performance bonuses, health insurance, flexible work arrangements, professional development opportunities, team events', 'Marketing Strategy, Content Creation, Analytics, CRM, Social Media, SEO', 'DevTools Co.', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop', 'New York, NY', 'https://devtools.co/careers/marketing-manager', 'full-time', 'remote', '$100,000 - $150,000', NOW(), NOW()),

('AI/ML Engineer', 'Work on cutting-edge machine learning models that power our AI-driven features. Join a team of world-class researchers and engineers pushing the boundaries of what''s possible.', 'Research and implement state-of-the-art ML algorithms. Build and deploy ML models at scale. Collaborate with product teams to integrate AI features into our applications. Stay up-to-date with latest ML research and technologies.', 'PhD in Computer Science, Machine Learning, or related field. 3+ years of experience with deep learning frameworks (TensorFlow, PyTorch). Strong programming skills in Python. Experience with MLOps and model deployment.', 'Competitive salary, equity, health insurance, flexible work hours, research budget, conference attendance, top-tier equipment', 'Python, TensorFlow, PyTorch, MLOps, AWS, Kubernetes, Research', 'AI Innovations Lab', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop', 'Seattle, WA', 'https://ai-innovations.com/careers/ml-engineer', 'full-time', 'in-person', '$200,000 - $250,000', NOW(), NOW()),

('UX/UI Designer', 'Create beautiful and intuitive user experiences for our fintech products. You''ll work closely with product managers and engineers to design solutions that users love.', 'Design user interfaces and experiences for web and mobile applications. Conduct user research and usability testing. Create wireframes, prototypes, and design systems. Collaborate with developers to ensure design implementation.', '3+ years of experience in UX/UI design. Proficiency in Figma, Sketch, or Adobe Creative Suite. Strong portfolio showcasing fintech or B2B SaaS design work. Experience with user research and usability testing.', 'Competitive salary, health insurance, flexible work arrangements, design tools budget, professional development, team building events', 'Figma, Sketch, Adobe Creative Suite, User Research, Prototyping, Design Systems', 'FinTech Solutions', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop', 'Austin, TX', 'https://fintech-solutions.com/careers/ux-designer', 'full-time', 'hybrid', '$100,000 - $150,000', NOW(), NOW()),

('DevOps Engineer', 'Build and maintain our cloud infrastructure to support millions of users. You''ll work with cutting-edge technologies and help scale our platform to new heights.', 'Design and implement CI/CD pipelines. Manage cloud infrastructure on AWS/GCP. Monitor system performance and ensure high availability. Automate deployment and scaling processes. Work with development teams to improve deployment practices.', '4+ years of experience in DevOps or Site Reliability Engineering. Strong knowledge of AWS/GCP and containerization (Docker, Kubernetes). Experience with infrastructure as code (Terraform, CloudFormation). Scripting skills in Python, Bash, or similar.', 'Competitive salary, equity, health insurance, flexible work hours, professional development budget, conference attendance', 'AWS, GCP, Docker, Kubernetes, Terraform, Python, Bash, CI/CD', 'CloudScale Technologies', 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop', 'Denver, CO', 'https://cloudscale.com/careers/devops-engineer', 'full-time', 'remote', '$100,000 - $150,000', NOW(), NOW());

-- Insert teams
INSERT INTO teams (product_name, team_size, equity_split, product_stage, product_description, roles, team_leader_id, created_at, updated_at) VALUES 
('EcoTrack', 4, 25, 'mvp', 'AI-powered carbon footprint tracking app that helps individuals and businesses reduce their environmental impact through personalized recommendations and gamification.', 'Frontend Developer, Backend Developer, AI/ML Engineer, UI/UX Designer', '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', NOW(), NOW()),

('HealthConnect', 6, 30, 'prototype', 'Telemedicine platform connecting patients with healthcare providers through video consultations, prescription management, and health monitoring.', 'Full-Stack Developer, Mobile Developer, Backend Developer, DevOps Engineer, Product Manager, Marketing Specialist', '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', NOW(), NOW()),

('EduLearn', 3, 20, 'idea', 'Personalized learning platform using AI to create custom study plans and track student progress across different subjects and skill levels.', 'Full-Stack Developer, AI/ML Engineer, Content Creator', '778224df-bcdd-45a0-a102-1c8208bab70e', NOW(), NOW()),

('MarketInsight', 5, 35, 'product', 'Advanced analytics platform for e-commerce businesses to optimize pricing, inventory, and marketing strategies using machine learning.', 'Data Scientist, Backend Developer, Frontend Developer, DevOps Engineer, Sales Manager', 'f58e0e96-4d20-4441-b86e-e641fd18dd68', NOW(), NOW());

-- Insert GPT ideas
INSERT INTO gpt_ideas (idea, views, claimed_at, claimed_by, created_at) VALUES 
('AI-powered personal nutritionist that analyzes your meals from photos and provides real-time health recommendations', 234, NULL, NULL, NOW()),
('Blockchain-based voting system for corporate governance and shareholder decisions', 156, NULL, NULL, NOW()),
('AR app that helps people learn to play musical instruments by overlaying finger positions and notes', 189, NOW(), '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', NOW()),
('AI chatbot that provides personalized mental health support and connects users with licensed therapists', 312, NULL, NULL, NOW()),
('Smart home automation system that learns your daily routines and optimizes energy usage automatically', 278, NOW(), '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', NOW()),
('Virtual reality platform for remote team building and collaboration in immersive 3D environments', 201, NULL, NULL, NOW()),
('AI-powered code review tool that suggests improvements and catches bugs before they reach production', 445, NOW(), '778224df-bcdd-45a0-a102-1c8208bab70e', NOW()),
('Blockchain-based supply chain tracking system for food safety and authenticity verification', 167, NULL, NULL, NOW()),
('AI personal trainer that creates custom workout plans based on your fitness goals and available equipment', 298, NOW(), 'f58e0e96-4d20-4441-b86e-e641fd18dd68', NOW()),
('Smart parking app that uses IoT sensors and AI to find and reserve parking spots in real-time', 223, NULL, NULL, NOW()),
('AI-powered language learning app that adapts to your learning style and provides immersive conversation practice', 356, NULL, NULL, NOW()),
('Blockchain-based digital identity system for secure and privacy-preserving online authentication', 189, NULL, NULL, NOW()),
('AR shopping assistant that helps you visualize furniture and home decor in your space before buying', 267, NULL, NULL, NOW()),
('AI-powered investment advisor that analyzes market trends and provides personalized portfolio recommendations', 334, NULL, NULL, NOW()),
('Smart city platform that optimizes traffic flow and reduces congestion using real-time data and AI', 412, NULL, NULL, NOW());

-- Insert GPT ideas likes
INSERT INTO gpt_ideas_likes (gpt_idea_id, profile_id) VALUES 
(1, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(1, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(1, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(2, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(2, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(3, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(3, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(3, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(4, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(4, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(5, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(5, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(5, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(6, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(6, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(7, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(7, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(7, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(8, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(8, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(9, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(9, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(9, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(10, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(10, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(11, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(11, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(12, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(12, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(13, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(13, '778224df-bcdd-45a0-a102-1c8208bab70e'),
(14, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(14, 'f58e0e96-4d20-4441-b86e-e641fd18dd68'),
(15, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25'),
(15, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a'),
(15, '778224df-bcdd-45a0-a102-1c8208bab70e');

-- Insert message rooms
INSERT INTO message_rooms (created_at) VALUES 
(NOW()),
(NOW()),
(NOW()),
(NOW()),
(NOW());

-- Insert message room members
INSERT INTO message_room_members (message_room_id, profile_id, created_at) VALUES 
(1, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', NOW()),
(1, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', NOW()),
(2, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', NOW()),
(2, '778224df-bcdd-45a0-a102-1c8208bab70e', NOW()),
(3, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', NOW()),
(3, '778224df-bcdd-45a0-a102-1c8208bab70e', NOW()),
(4, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', NOW()),
(4, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', NOW()),
(5, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', NOW()),
(5, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', NOW()),
(5, '778224df-bcdd-45a0-a102-1c8208bab70e', NOW()),
(5, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', NOW());

-- Insert messages
INSERT INTO messages (message_room_id, sender_id, content, seen, created_at) VALUES 
(1, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 'Hey Sarah! I saw your post about product development. Really insightful stuff!', true, NOW()),
(1, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 'Thanks Alex! I''m glad you found it helpful. Are you working on any interesting projects?', true, NOW()),
(1, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 'Yes, actually! I''m building an AI-powered task management tool. Would love to get your thoughts on the product strategy.', false, NOW()),
(2, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 'Mike, your growth hacking strategies post was amazing! Mind if I pick your brain about some marketing tactics?', true, NOW()),
(2, '778224df-bcdd-45a0-a102-1c8208bab70e', 'Absolutely! I''d be happy to help. What specific areas are you looking to focus on?', true, NOW()),
(3, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 'Hey Mike, I''m interested in collaborating on a project. Are you available for a quick call this week?', false, NOW()),
(4, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 'Emma, congrats on the funding round! Your startup advice has been incredibly valuable.', true, NOW()),
(4, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', 'Thank you Alex! I''m always happy to share what I''ve learned. How''s your startup journey going?', true, NOW()),
(5, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 'Hey everyone! I''m organizing a virtual meetup next week to discuss the latest in AI and product development. Who''s interested?', true, NOW()),
(5, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 'Count me in! That sounds like a great opportunity to learn and network.', true, NOW()),
(5, '778224df-bcdd-45a0-a102-1c8208bab70e', 'I''m definitely interested! What time were you thinking?', true, NOW()),
(5, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', 'Great idea Alex! I''d love to participate and share some insights from our recent AI implementation.', false, NOW());

-- Insert notifications
INSERT INTO notifications (source_id, product_id, post_id, target_id, type, created_at) VALUES 
('49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 1, NULL, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 'review', NOW()),
('778224df-bcdd-45a0-a102-1c8208bab70e', 1, NULL, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 'review', NOW()),
('f58e0e96-4d20-4441-b86e-e641fd18dd68', 1, NULL, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 'review', NOW()),
('28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 3, NULL, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 'review', NOW()),
('778224df-bcdd-45a0-a102-1c8208bab70e', 3, NULL, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 'review', NOW()),
('f58e0e96-4d20-4441-b86e-e641fd18dd68', 3, NULL, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 'review', NOW()),
('28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 4, NULL, '778224df-bcdd-45a0-a102-1c8208bab70e', 'review', NOW()),
('49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 4, NULL, '778224df-bcdd-45a0-a102-1c8208bab70e', 'review', NOW()),
('f58e0e96-4d20-4441-b86e-e641fd18dd68', 4, NULL, '778224df-bcdd-45a0-a102-1c8208bab70e', 'review', NOW()),
('28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 5, NULL, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', 'review', NOW()),
('49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 5, NULL, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', 'review', NOW()),
('778224df-bcdd-45a0-a102-1c8208bab70e', 5, NULL, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', 'review', NOW()),
('49677b4e-1c84-46ed-b7bb-d9bcc57f197a', NULL, 1, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 'reply', NOW()),
('778224df-bcdd-45a0-a102-1c8208bab70e', NULL, 1, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 'reply', NOW()),
('f58e0e96-4d20-4441-b86e-e641fd18dd68', NULL, 1, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 'reply', NOW()),
('28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', NULL, 2, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 'reply', NOW()),
('778224df-bcdd-45a0-a102-1c8208bab70e', NULL, 2, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 'reply', NOW()),
('f58e0e96-4d20-4441-b86e-e641fd18dd68', NULL, 2, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 'reply', NOW()),
('28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', NULL, 3, '778224df-bcdd-45a0-a102-1c8208bab70e', 'reply', NOW()),
('49677b4e-1c84-46ed-b7bb-d9bcc57f197a', NULL, 3, '778224df-bcdd-45a0-a102-1c8208bab70e', 'reply', NOW()),
('f58e0e96-4d20-4441-b86e-e641fd18dd68', NULL, 3, '778224df-bcdd-45a0-a102-1c8208bab70e', 'reply', NOW()),
('49677b4e-1c84-46ed-b7bb-d9bcc57f197a', NULL, NULL, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 'follow', NOW()),
('778224df-bcdd-45a0-a102-1c8208bab70e', NULL, NULL, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 'follow', NOW()),
('f58e0e96-4d20-4441-b86e-e641fd18dd68', NULL, NULL, '28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', 'follow', NOW()),
('28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', NULL, NULL, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 'follow', NOW()),
('f58e0e96-4d20-4441-b86e-e641fd18dd68', NULL, NULL, '49677b4e-1c84-46ed-b7bb-d9bcc57f197a', 'follow', NOW()),
('28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', NULL, NULL, '778224df-bcdd-45a0-a102-1c8208bab70e', 'follow', NOW()),
('49677b4e-1c84-46ed-b7bb-d9bcc57f197a', NULL, NULL, '778224df-bcdd-45a0-a102-1c8208bab70e', 'follow', NOW()),
('f58e0e96-4d20-4441-b86e-e641fd18dd68', NULL, NULL, '778224df-bcdd-45a0-a102-1c8208bab70e', 'follow', NOW()),
('28fd9d26-3f1a-4c6e-94ba-06cf67e8de25', NULL, NULL, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', 'follow', NOW()),
('49677b4e-1c84-46ed-b7bb-d9bcc57f197a', NULL, NULL, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', 'follow', NOW()),
('778224df-bcdd-45a0-a102-1c8208bab70e', NULL, NULL, 'f58e0e96-4d20-4441-b86e-e641fd18dd68', 'follow', NOW());
