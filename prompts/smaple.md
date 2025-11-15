# Prompt Template Library 📝

This collection includes various practical prompt templates to help you use AI Resume Applier more efficiently.

## Table of Contents

- [Basic Workflow](#basic-workflow)
- [Page Analysis](#page-analysis)
- [Information Filling](#information-filling)
- [Smart Answers](#smart-answers)
- [Error Handling](#error-handling)
- [Advanced Techniques](#advanced-techniques)

---

## Basic Workflow

### 🔌 Connect to Browser

```
Connect to the current browser tab and confirm access to page content.
```

### 📊 Quick Diagnosis

```
Please perform the following:
1. Connect to the current browser tab
2. Get the page title and URL
3. Identify which recruiting platform this is
4. Tell me which stage of the application process I'm at (browsing job/starting application/filling form/confirming submission)
```

---

## Page Analysis

### 🔍 Comprehensive Form Structure Analysis

```
Please analyze the current application form in detail:

1. List all form fields, including:
   - Field name
   - Field type (text box/dropdown/radio/checkbox/file upload)
   - Whether required
   - Character limits or format requirements

2. Identify special elements on the page:
   - CAPTCHAs
   - Agreement checkboxes
   - File upload areas
   - Multi-step navigation

3. Assess form complexity and provide recommended filling strategy.
```

### 📝 Identify Question Types

```
Analyze all questions/fields on the page and categorize them as:

1. Basic Information (name, contact info, etc.)
2. Work Experience (company, position, dates, etc.)
3. Skills Assessment (skill tags, proficiency levels, etc.)
4. Open-ended Questions (questions requiring written answers)
5. Attachments (resume, portfolio, etc.)

For each category, tell me the best approach to handle it.
```

### 🎯 Smart Field Matching

```
Compare my resume information (my-resume.md) with current form fields and generate a matching checklist:

✅ Fields that can be auto-filled directly
⚠️ Fields requiring format conversion (e.g., date format)
❓ Fields requiring manual decision (e.g., salary range)
📎 Files requiring manual upload

Provide a specific filling plan.
```

---

## Information Filling

### 👤 Basic Information Fill

```
Based on my resume information, fill in the basic information section of the form:
- Name
- Phone number
- Email
- Current city
- Desired city
- Education level
- University

Notes:
1. Ensure phone number format is correct (with spaces or dashes)
2. If there are dropdowns, select the most matching option
3. List filled fields for my confirmation after completion
```

### 💼 Work Experience Fill

```
Fill in the work experience section using the first two work experiences from my resume:

Requirements:
1. Fill according to form field order (company name, position, dates, job description)
2. If there are character limits, automatically condense work descriptions to fit
3. Date format must match form requirements (identify if YYYY-MM-DD or YYYY/MM, etc.)
4. If "present", check if the form has a "currently employed" checkbox

Please confirm content accuracy after filling.
```

### 🎓 Education Background Fill

```
Fill in educational background:
- School: XX University
- Degree: Bachelor's/Master's
- Major: Computer Science
- Dates: Sep 2017 - Jun 2021

Check:
1. Does the degree selection have corresponding degree options (Bachelor/Master/PhD)?
2. Is GPA or class ranking required?
3. Are major courses required?
```

### 🛠️ Skills Tags Fill

```
Based on job requirements and my skill list, intelligently fill the skills section:

1. Identify the form's skill input method:
   - Free-form tag input
   - Multi-select dropdown
   - Proficiency rating

2. Prioritize skills with high JD matching

3. If proficiency rating exists:
   - Expert/Proficient: Used frequently in work for 2+ years
   - Familiar: Used but not primary skill
   - Learning: Recently learning but not used in production

4. Recommend 3-8 core skills, avoid stuffing
```

### 💰 Expected Salary Fill

```
For the expected salary field, please:

1. Confirm if it's single choice or can fill a range
2. Confirm if it's pre-tax monthly, annual, or other
3. Convert based on my resume's expected salary ($80K-100K)

Suggested strategy:
- If range: fill $80K-$100K or corresponding annual salary
- If single choice: select median of the range
- If "negotiable" option exists: not recommended (lowers screening pass rate)

Confirm before filling.
```

---

## Smart Answers

### 💬 Self-Introduction Generation

```
Generate a self-introduction for this position (200-300 words):

Based on:
1. Key requirements in job description (JD) (carefully analyze JD on page)
2. My core strengths (extracted from resume)
3. Match analysis

Requirements:
- Start directly with target position and core competitiveness
- Middle section: support with 1-2 project experiences
- End: express desire to join
- Avoid empty platitudes, be sincere and specific
- Keep within character limit

Please show me first, I'll confirm before filling into form.
```

### 🎯 "Why Choose Us" Answer

```
Current page has question: "Why do you want to join us?" (character limit: 150 words)

Please analyze:
1. Company introduction and features (from page)
2. Position highlights (team size, tech stack, business direction)
3. My career development needs (inferred from resume)

Generation points:
- 30%: Company appeal (business, culture, impact)
- 40%: Position fit (tech stack, growth opportunities)
- 30%: Personal growth expectations

Avoid: overly broad praise, obviously templated content
```

### 🚀 Project Experience Refinement

```
Form requires filling "most fulfilling project":

Select the most matching project from my resume, generate in this structure:

【Project Background】(30 words)
- Project type and business scenario

【My Responsibilities】(50 words)
- Specific modules and technical work I was responsible for

【Technical Highlights】(50 words)
- Key technologies used and architecture design

【Project Results】(40 words)
- Quantifiable data (user volume, performance improvement, efficiency gains, etc.)

Keep total around 170 words, highlight relevance to target position.
```

### 🤔 Open-ended Question Universal Template

```
There's an open-ended question on the page: "{question content}"

Please answer following this approach:

1. First analyze question type:
   - Motivation (why)
   - Capability (how to do)
   - Situational (if... would you...)
   - Opinion (your view on...)

2. Use STAR method (if applicable):
   - Situation: background
   - Task: task
   - Action: action
   - Result: result

3. Generate sincere specific answer based on my actual experience

4. Keep within character limit ({number} words)

Generate 3 versions for me to choose:
- Version A: Emphasize technical ability
- Version B: Emphasize teamwork
- Version C: Emphasize learning growth
```

---

## Error Handling

### ⚠️ Unrecognizable Field

```
There's a field "{field name}" in the form, I'm not sure what to fill.

Please:
1. Analyze possible meaning of this field
2. Check if there's hint text or examples
3. Look for potentially matching information from my resume
4. If really can't determine, suggest how I should handle it (leave blank/manual fill/contact HR)
```

### 🔄 Date Format Conversion

```
My resume's work dates format is "2021.06 - 2024.03", but form requires format {form format}.

Please:
1. Convert all dates to form's required format
2. Handle "present" case (whether to check currently employed box)
3. List all converted dates for my confirmation
```

### 📏 Content Exceeds Limit

```
The content I'm preparing to fill exceeds character limit:

Original content: {original content} ({current word count} words)
Limit: {limit word count} words

Please:
1. Keep the most core information
2. Simplify expression while maintaining completeness
3. Prioritize keeping quantifiable results
4. Provide condensed version
```

### 🤖 CAPTCHA Handling

```
Detected CAPTCHA on page (slider/click/input), please:
1. Tell me the type and location of CAPTCHA
2. Pause automatic operations
3. After I complete verification, remind me to continue next step
```

---

## Advanced Techniques

### 🔁 Batch Application Preparation

```
I plan to apply to multiple similar positions, please help me:

1. Analyze current page's form structure
2. Extract reusable filling logic
3. Identify which fields need adjustment for different positions
4. Generate an "Application Checklist" including:
   - Must-modify fields (JD analysis, position-related answers)
   - Reusable fields (basic info, work experience)
   - Details to note

This way I can quickly reuse when encountering forms from same platform next time.
```

### 📊 JD Keywords Analysis

```
Deep analysis of job description (JD) on the page:

1. Extract core requirements:
   - Must-have skills (e.g., "proficient in React")
   - Nice-to-haves (e.g., "large-scale system experience")
   - Soft skills (e.g., "good communication skills")

2. Match analysis with my resume:
   - Full match: X items
   - Partial match: X items
   - No match: X items
   - Overall match rate: X%

3. Provide application recommendations:
   - Whether to recommend applying
   - Experiences to highlight
   - Points to emphasize when answering questions
```

### 🎨 Targeted Resume Adjustment Suggestions

```
Based on this position's requirements, analyze how to optimize my resume:

1. Project experience ordering: which project should be first
2. Skill tag adjustments: which skills should be highlighted
3. Work description optimization: what keywords would match better
4. Self-introduction angle: emphasize which aspect of capabilities

These suggestions I can use for:
- Updating my my-resume.md document
- Adjusting focus points of answers in this application
```

### 🔍 Company Background Research

```
Before filling out application, help me quickly understand this company:

Please extract from page:
1. Company size (headcount, funding round)
2. Main business and products
3. Tech stack (if mentioned)
4. Team information (if mentioned)
5. Company culture or benefits

Based on this information, give me 3 good questions to ask during interview.
```

### 📈 Application Record Organization

```
I just completed an application, please help me organize a record:

Generate a record including:
- Company name: {extract from page}
- Position name: {extract from page}
- Application time: {current time}
- Platform: {identify platform}
- Expected salary: {what I filled}
- Key requirements: {3 core requirements from JD}
- Notes: {any special circumstances}

Format as Markdown table, convenient for me to append to application record file.
```

### 🎯 A/B Testing Answers

```
For question "{question content}", I want to test different answer styles' effects.

Please generate 3 versions:

Version A - Technical-focused:
- Highlight technical depth and architecture capability
- Suitable for: companies with strong technical atmosphere

Version B - Business-focused:
- Highlight business understanding and product thinking
- Suitable for: companies emphasizing commercial value

Version C - Balanced:
- Technical and business balanced
- Suitable for: when company style is uncertain

Keep each version within {word count} words, help me choose the most suitable version for current company.
```

---

## 🎓 Learning Suggestions

### Optimize Your Prompts

1. **Be Specific**: Provide clear character limits, format requirements
2. **Structure**: Use numbering, bullet points so AI understands your expectations
3. **Context**: Reference specific resume content and JD information
4. **Verification Step**: Ask AI to show you results first, confirm before filling

### Improve Efficiency

1. **Pre-preparation**: Maintain my-resume.md well, more detailed the better
2. **Template Reuse**: Save commonly used prompts, use directly next time
3. **Step-by-step Execution**: For complex forms divide into steps, verify each
4. **Record Experience**: When encountering new platforms or special cases, record solutions

---

## 💡 Prompt Writing Tips

### ✅ Good Prompt Characteristics

```
Good example:
"Analyze the 'project experience' section of this form, select the most matching project from my resume,
generate 150-word description highlighting tech stack match, use data to show project results."

Why it's good:
- Clear tasks (analyze + select + generate)
- Specific requirements (150 words, highlight match, use data)
- Clear input/output
```

### ❌ Prompts to Avoid

```
Bad example:
"Help me fill out the form"

Problems:
- Too vague, AI doesn't know where to start
- Lacks constraints, results may not meet expectations
- No verification step, high risk
```

---

## 🤝 Contribute Your Prompts

If you discover useful prompt templates, PRs are welcome!

Submission format:
```markdown
### 📌 [Prompt Title]

**Use Case**: Describe when to use

**Prompt Content**:
\`\`\`
Your prompt content
\`\`\`

**Example Effect**: Show actual usage results

**Notes**: Points to note when using
```

---

Made with ❤️ by the community