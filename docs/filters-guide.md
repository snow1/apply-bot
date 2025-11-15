# Apply Filters Configuration Guide

## Overview

The `apply-filters.json` file allows you to set up automated filtering rules for job applications. The AI assistant reads this file to evaluate job postings and recommend whether you should apply, skip, or manually review each position.

## File Location

Place the file in your project root:
```
apply-bot/
├── apply-filters.json  👈 Your filters config
├── my-resume.md
└── README.md
```

## How It Works

When you ask the AI to analyze a job posting, it will:

1. **Read** your `apply-filters.json` preferences
2. **Extract** key information from the job posting (salary, location, tech stack, etc.)
3. **Compare** the posting against your filters
4. **Recommend** an action: ✅ Apply | ⏭️ Skip | 🤔 Manual Review

---

## Configuration Sections

### 1. Blacklist (Hard Exclusions)

Jobs matching ANY of these criteria will be **automatically skipped**.

```json
{
  "blacklist": {
    "companies": ["Company to avoid"],
    "keywords": ["red flag terms"],
    "locations": ["undesired locations"],
    "industries": ["industries to avoid"]
  }
}
```

**Example Use Cases:**
- Exclude specific companies with poor reviews
- Filter out "unpaid internship" or "commission only"
- Avoid certain locations or industries

---

### 2. Whitelist (Preferred Matches)

Jobs matching these get **higher priority** and positive scoring.

```json
{
  "whitelist": {
    "companies": ["FAANG", "Dream companies"],
    "keywords": ["remote-first", "flexible"],
    "locations": ["USA", "Remote"]
  }
}
```

**Not mandatory** - just increases the match score.

---

### 3. Salary Requirements

Define your compensation expectations.

```json
{
  "salary": {
    "min": 100000,           // Minimum acceptable
    "max": 250000,           // Maximum range
    "target": 150000,        // Your ideal salary
    "currency": "USD",
    "includeEquity": true,   // Consider stock options
    "minEquity": "0.1%"      // Minimum equity stake
  }
}
```

**Tips:**
- Set `min` as your true minimum (below = auto-skip)
- `target` helps AI prioritize better-paying roles
- Enable `includeEquity` for startups

---

### 4. Work Type Preferences

```json
{
  "workType": {
    "remote": true,              // Fully remote OK
    "hybrid": true,              // Hybrid OK
    "onsite": false,             // Reject full onsite
    "acceptOvertimeOccasionally": true,
    "maxOnsiteDaysPerWeek": 2    // For hybrid roles
  }
}
```

---

### 5. Job Requirements

Filter by experience level and seniority.

```json
{
  "jobRequirements": {
    "minYearsExperience": 3,
    "maxYearsExperience": 10,
    "levels": ["Senior", "Staff", "Principal"],
    "excludeLevels": ["Intern", "Junior"]
  }
}
```

---

### 6. Tech Stack

Critical for technical roles!

```json
{
  "techStack": {
    "mustHave": ["React", "TypeScript"],       // Required skills
    "niceToHave": ["Next.js", "GraphQL"],      // Bonus points
    "dealBreakers": ["PHP", "Legacy codebase"] // Auto-reject
  }
}
```

**How it works:**
- Missing `mustHave` → Lower score or skip
- Contains `dealBreakers` → Auto-skip
- Has `niceToHave` → Bonus points

---

### 7. Company Preferences

```json
{
  "companyPreferences": {
    "sizes": ["Medium (100-500)", "Large (500+)"],
    "types": ["Product Company", "SaaS"],
    "excludeTypes": ["Outsourcing", "Agency"],
    "fundingStage": ["Series B+", "Profitable"],
    "minFunding": "10M USD"
  }
}
```

Great for filtering out:
- Outsourcing/consulting firms
- Early-stage startups (if you prefer stability)
- Underfunded companies

---

### 8. Auto Rules (Advanced)

Control AI behavior automatically.

```json
{
  "autoRules": {
    "autoApply": {
      "enabled": false,  // ⚠️ Keep false for safety
      "conditions": "Salary > 150K AND Remote AND Whitelist company"
    },
    "autoSkip": {
      "enabled": true,   // ✅ Safe to enable
      "conditions": "Salary < 100K OR Blacklist OR Dealbreaker tech"
    },
    "requireManualReview": [
      "Salary not disclosed",
      "Equity-heavy compensation"
    ]
  }
}
```

**Recommendation:** Keep `autoApply.enabled: false` to avoid accidental applications.

---

### 9. Benefits

Define must-have and nice-to-have perks.

```json
{
  "benefits": {
    "mustHave": ["Health insurance", "PTO"],
    "preferred": ["Stock options", "401(k)"],
    "dealBreakers": ["No health insurance"]
  }
}
```

---

### 10. Visa & Immigration

For international job seekers.

```json
{
  "visa": {
    "requiresSponsorship": false,
    "currentStatus": "H1B / Citizen",
    "acceptsRemoteInternational": true,
    "preferredCountries": ["USA", "Canada"]
  }
}
```

---

### 11. Other Preferences

```json
{
  "other": {
    "maxCommuteTimeMinutes": 45,
    "acceptBusinessTravel": "Occasionally (< 20%)",
    "preferredTeamSize": "10-50 people",
    "workingHours": {
      "timezone": "PST / EST",
      "acceptAsyncWork": true
    }
  }
}
```

---

## Usage Examples

### Basic Evaluation Prompt

```
"Please read my apply-filters.json and evaluate this job posting.
Should I apply, skip, or manually review?"
```

### Detailed Analysis

```
"Using my filters (apply-filters.json), analyze this job posting and provide:
1. Match score (0-100)
2. Pros and cons
3. Missing information
4. Final recommendation"
```

### Batch Processing

```
"I'm looking at 10 job postings. For each one, check against my
apply-filters.json and create a summary table showing:
- Company name
- Match score
- Recommendation (Apply/Skip/Review)
- Key highlights or concerns"
```

---

## Best Practices

### ✅ Do's

- **Be specific** - "Remote-first culture" vs generic "good company"
- **Set realistic minimums** - Don't price yourself out
- **Update regularly** - Adjust as priorities change
- **Use dealBreakers wisely** - Only for true red flags

### ❌ Don'ts

- **Don't enable autoApply** - Always manually review before applying
- **Don't over-filter** - You might miss good opportunities
- **Don't forget equity** - Can be significant for startups
- **Don't ignore company culture** - Add keywords for work-life balance

---

## Example AI Prompts

### Initial Setup
```
"I've created apply-filters.json with my preferences.
Please review it and suggest any improvements."
```

### Job Evaluation
```
"I'm on a job posting for 'Senior Frontend Engineer at Company X'.
Read my apply-filters.json and tell me if this matches my criteria."
```

### Multi-tab Analysis
```
"I have 5 browser tabs open with job postings. Using my filters,
analyze each one and rank them by match score."
```

### Missing Info
```
"This job posting doesn't list salary. Based on my filters and
the job description, should I reach out to ask, or skip it?"
```

---

## Troubleshooting

### AI not reading the file?

Make sure the file is at project root: `/apply-bot/apply-filters.json`

### Too many auto-skips?

- Lower your `salary.min`
- Reduce `mustHave` tech requirements
- Remove overly restrictive `dealBreakers`

### AI recommending bad matches?

- Add more specific keywords to `blacklist`
- Strengthen `dealBreakers`
- Be more explicit in `notes` field

---

## Template Files

See example configurations:
- `examples/filters-conservative.json` - Strict filtering
- `examples/filters-open.json` - Open to more opportunities
- `examples/filters-remote-only.json` - Remote work focused

---

## Integration with Resume

The AI considers **both** files together:

1. `my-resume.md` - Your skills and experience
2. `apply-filters.json` - Your preferences

**Example prompt:**
```
"Based on my resume (my-resume.md) and preferences (apply-filters.json),
is this 'Senior React Developer' role a good fit?"
```

This ensures the AI considers both **capability match** and **preference match**.

---

## License

MIT - Customize as needed for your job search!
