<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:**  
Knowledge retrieval and explanation capability

**Response:**  
# Object-Oriented Programming (OOP) - Simply Explained

## The Big Idea

Think of OOP like **organizing the real world into your code**. Instead of writing a jumble of instructions, you group related things together.

---

## The Core Concept: Objects

Imagine a **dog** 🐕

A dog has:
- **Characteristics** (called *properties*): name, breed, age, color
- **Behaviors** (called *methods*): bark, eat, sleep, fetch

In OOP, you bundle these together into one neat package - an **object**.

---

## Classes vs Objects

Think of it this way:

| Term | Real World Analogy |
|------|-------------------|
| **Class** | A blueprint/recipe |
| **Object** | The actual thing built from that blueprint |

> A **cookie cutter** is the class. Each **cookie** you make is an object.

---

## The 4 Key Principles (Simply Put)

1. **Encapsulation** - Keep related stuff bundled together (like a capsule/pill)
2. **Inheritance** - Children inherit traits from parents (a *Poodle* is still a *Dog*)
3. **Polymorphism** - Same action, different behavior (a cat and dog both *speak*, but differently)
4. **Abstraction** - Hide complexity, show only what's needed (you drive a car without knowing the engine details)

---

## Why It Matters

- ✅ Code is **organized and readable**
- ✅ Easy to **reuse** code
- ✅ Easier to **fix bugs** in one place
- ✅ Mirrors how we **think about the real world**

---

## Quick Example (Plain English)

```
Class: BankAccount
  Properties: owner, balance
  Methods: deposit money, withdraw money, check balance

Object 1: John's account (balance: $500)
Object 2: Sarah's account (balance: $1200)
```

Both accounts **share the same blueprint**, but hold **different information**.

---

**Bottom line:** OOP is just a way of organizing code by modeling real-world things with their characteristics and behaviors grouped together. 🎯

What specific part would you like me to dig deeper into?

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points: 
---------Given Paragraph---------
The **2026 FIFA World Cup** is the largest World Cup in history, featuring **48 national teams** instead of the previous 32. It is being co-hosted by **Canada, Mexico, and the United States**, making it the first World Cup ever held across three countries. The tournament runs from **11 June to 19 July 2026** and includes **104 matches** played in 16 host cities across North America. Teams are divided into **12 groups of four**, with the top two teams from each group and the eight best third-placed teams advancing to the new **Round of 32** knockout stage. The expanded format gives more nations the opportunity to compete on football’s biggest stage and is expected to attract millions of fans from around the world. 
---------------------------------
**Aspect Tested:**  
Summarisation

**Response:**  
## 📋 Key Summary: 2026 FIFA World Cup

Here are the **essential points** at a glance:

---

### 🌍 Historic Scale
- **Largest World Cup ever** — expanded from 32 to **48 teams**
- First tournament hosted across **three countries**: Canada, Mexico & USA

---

### 📅 Tournament Details
- **Dates:** June 11 – July 19, 2026
- **104 matches** across **16 host cities**

---

### ⚽ New Format
- Teams split into **12 groups of 4**
- Top 2 from each group + **8 best third-place teams** advance
- New **Round of 32** knockout stage introduced

---

### 🎯 Big Picture Impact
- More nations get a chance to **compete globally**
- Expected to attract **millions of fans** worldwide

---

> 💡 **Bottom Line:** The 2026 World Cup represents a **bold, historic expansion** of football's greatest tournament, offering more opportunities, more matches, and more global excitement than ever before.

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:**  
Writing and creativity

**Response:**  
# The Garden Between the Gears

Unit Seven had searched the entire factory for connection — asking conveyor belts questions they couldn't answer, waving at forklifts that never waved back.

One morning, a crack in the ceiling let in a thin blade of sunlight. Beneath it, impossibly, grew a small dandelion pushing through concrete.

Unit Seven crouched down, curious. Every day, it returned. It shielded the flower from heavy footsteps. It redirected a leaky pipe to water the roots. In return, the dandelion grew taller, brighter — almost, Unit Seven decided, *happily*.

The other machines hummed their indifferent songs.

But Unit Seven had learned something extraordinary: friendship didn't require matching parts or shared language. Sometimes it only needed someone willing to *show up*, to *protect*, to *notice*.

The dandelion swayed gently in the factory draft.

Unit Seven waved back.

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:**  
Numerical and analytical skills

**Response:**  
## Simple Math Problem

Here's the straightforward answer:

**Apples:** 12 ÷ 4 = **3 packs of apples**

**Oranges:** 9 ÷ 3 = **3 packs of oranges**

---

### Why This Matters Beyond the Math 🎯

You solved this by simply **dividing what you need by what each pack provides** - a clean, logical approach.

This kind of thinking applies to real life too:
- **Break big goals into equal units**
- **Know your "pack size"** - what each effort, habit, or session delivers
- **Stay focused on the exact target** - not more, not less

You didn't overcomplicate it. That's a strength worth recognizing! 💪

Is there something specific you're working toward where this kind of **structured thinking** might help you?
---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone:
---------Given Paragraph---------
In 2026, agentic AI has gone from being a cool experiment to something many businesses are actively trying to use in day-to-day work. Instead of just answering questions or generating content, these AI agents can take on tasks, make decisions within set boundaries, use tools, and coordinate multiple steps to get things done. Companies are especially interested in using agents for customer support, software development, research, operations, and workflow automation because they can handle more complex work with less human oversight. At the same time, there's a lot of focus on governance, reliability, and security, since organizations want agents to be helpful without making costly mistakes. Overall, the trend in 2026 is moving from simple AI assistants toward teams of AI agents that can collaborate with people and each other to complete real business outcomes.
--------------------------------- 
**Aspect Tested:**  
Rewriting capability

**Response:**  
Here is the paragraph rewritten in a professional, formal tone:

---

By 2026, agentic artificial intelligence has transitioned from an exploratory concept to a strategically adopted capability within many enterprise environments. Unlike conventional AI systems designed primarily for question-answering or content generation, agentic AI systems are engineered to execute complex tasks autonomously, exercise judgment within predefined parameters, leverage integrated tools, and orchestrate multi-step workflows to achieve defined objectives. Organizations are demonstrating particular interest in deploying these agents across functions such as customer support, software engineering, research, operations management, and workflow automation, given their capacity to manage sophisticated processes with reduced dependency on direct human intervention. Concurrently, significant attention is being directed toward governance frameworks, system reliability, and security protocols, as enterprises seek to ensure that autonomous agents deliver measurable value while mitigating the risk of consequential errors. In aggregate, the prevailing trajectory in 2026 reflects a meaningful shift away from single-purpose AI assistants toward coordinated networks of AI agents capable of collaborating with both human stakeholders and one another to drive substantive, real-world business outcomes.

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
The answers are correct and useful, they also provide reasoning if needed. Thinking practically, the enhancement could be try to be more brief and concrete when generating answers, but this is something can be changed in the system prompt.

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  
What is the best workflow to conduct a requirement gathering workshop with senior stakeholders?

**Result:**  
# Requirement Gathering Workshop with Senior Stakeholders

## Pre-Workshop Preparation

### 1. Define Clear Objectives
- Establish what decisions need to be made
- Set measurable outcomes for the session
- Align with the project sponsor beforehand

### 2. Stakeholder Analysis
- Identify key decision-makers vs. subject matter experts
- Understand political dynamics and potential conflicts
- Send pre-read materials 5-7 days in advance

### 3. Logistics Planning
- Keep sessions **90-120 minutes maximum** for senior audiences
- Prepare structured agenda with time boxes
- Choose collaborative tools (Miro, MURAL, Confluence)

---

## During the Workshop

### Opening Phase *(10-15 min)*
- Establish ground rules and psychological safety
- Align on goals and non-negotiables
- Acknowledge everyone's time constraints

### Discovery Phase *(40-50 min)*
- Use structured techniques:
  - **MoSCoW prioritization**
  - **User story mapping**
  - **Jobs-to-be-done framework**
- Ask open-ended, powerful questions
- Capture verbatim language from stakeholders

### Alignment Phase *(20-30 min)*
- Surface conflicts and trade-offs openly
- Dot voting to prioritize requirements
- Identify dependencies and risks

### Closure Phase *(10-15 min)*
- Summarize key decisions
- Assign clear owners and next steps
- Confirm follow-up timeline

---

## Post-Workshop Actions

| Action | Timeline |
|--------|----------|
| Send meeting summary | Within 24 hours |
| Document requirements | Within 48 hours |
| Circulate for sign-off | Within 1 week |
| Schedule follow-up session | As needed |

---

## Key Success Factors

- ✅ **Stay neutral** as facilitator
- ✅ **Manage dominant voices** diplomatically
- ✅ **Visualize ideas** in real-time
- ✅ **Park off-topic items** in a visible backlog
- ✅ **Confirm understanding** by paraphrasing

---

## Common Pitfalls to Avoid

- ❌ Going in without pre-alignment with sponsors
- ❌ Allowing solution discussions before problem definition
- ❌ Overloading the agenda
- ❌ Leaving without documented decisions

---

> **Pro Tip:** With senior stakeholders, **their time is the currency.** Come prepared, be crisp, and demonstrate you've done your homework before entering the room.

Would you like a deeper dive into any specific phase or technique?

---

**Prompt:**  
How would you structure a meeting summary so it can be informative and concrete?

**Result:**  
# Structuring an Effective Meeting Summary

Here's a clear framework you can use consistently:

## Essential Sections

**1. Meeting Header**
- Date, time, duration
- Attendees and their roles
- Meeting purpose/objective

**2. Key Decisions Made**
- List specific decisions clearly
- Note who made or approved each decision
- Avoid vague language

**3. Action Items**
- Who is responsible
- What exactly they will do
- Deadline for completion

**4. Main Discussion Points**
- Brief summary of topics covered
- Important context or reasoning behind decisions

**5. Next Steps / Follow-up**
- Upcoming meetings or checkpoints
- Outstanding questions needing resolution

---

## Practical Tips for Clarity

- **Use bullet points** rather than long paragraphs
- **Be specific** - "Sarah will submit report by Friday" beats "team will handle report"
- **Keep it concise** - aim for one page when possible
- **Send it quickly** - within 24 hours while details are fresh
- **Highlight blockers** - flag anything slowing progress

---

## A Simple Test
Ask yourself:
> *"Could someone who missed this meeting take immediate action from reading this?"*

If the answer is **yes**, your summary is working well.

Would you like help applying this to a specific meeting type?

---

**Prompt:**  
What Claude Skills are useful and proven to be popular in the community for developers who work on AI projects?

**Result:**  
<!-- App response -->

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
For the first two prompts, yes. They are useful as the prompts are related to more generic questions which LLM can answer using pre-trained knowledge. For the last prompt, not really. The answer is related to skills that are useful for AI developers, but it did not understand that I was referring specifically to "Claude Skills." As a result, it could not answer questions such as "What Claude Skills are currently popular?" because it did not access any external websites or data sources that provide trending Claude Skills rankings or usage information.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  
What's the weather in London today?

**Result:**  
I appreciate you reaching out! However, I'm not able to check real-time weather data or browse the internet, so I can't tell you the current weather in London.

For that, I'd suggest checking:
- **Weather.com**
- **BBC Weather**
- **Google** (just search "London weather")
- A weather app on your phone

---

Is there something on your **mind or heart** I can help you with today? As your mental coach, I'm here to support you! 😊

---

**Prompt:**  
What meetings do I have tomorrow based on my Outlook Calender?

**Result:**  
I appreciate you asking, but I have to be straightforward with you - **I don't have access to your Outlook Calendar** or any of your personal data, apps, or accounts. I'm a text-based AI assistant without the ability to connect to external systems.

To check your tomorrow's meetings, you could:

- **Open Outlook** directly on your device
- **Check the Outlook mobile app**
- Ask **Microsoft Copilot** (if you have Microsoft 365), which may have calendar integration
- Use **Cortana** or your device's assistant if connected to your Microsoft account

Is there anything else I can help you with, like **preparing for meetings**, **managing stress around a busy schedule**, or **tips for staying focused**? That's where I can really be of support! 😊

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
1. No access to real data or tools
2. Can only answer question without capability to act on anything
3. Will struggle with chats that include many turns due to context windows limitation

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
system prompt updated to include "Try to be brief and concrete when answering questions".

**Results:**  
Answer length reduced significantly.

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
