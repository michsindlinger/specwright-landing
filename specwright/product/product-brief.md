# Product Brief: Specwright

> Last Updated: 2026-03-04
> Version: 1.0.0

## Pitch

**Specwright is an open-source framework that brings structured, specification-driven workflows to AI coding assistants.**

It transforms Claude Code from a code generator into a structured development partner - providing a complete lifecycle from product planning through execution, using specs and user stories as the foundation for development. You architect the solution interactively, AI agents deliver the implementation autonomously.

## Users

### Primary Target Audience
**Small development teams (2-5 developers) using Claude Code for project delivery**

- **Profile**: Startup teams, small agencies, or product teams building SaaS products or client projects
- **Context**: Using Claude Code for AI-assisted development but struggling with consistency, quality control, and structured workflows
- **Pain**: Spending 30-40% of development time managing AI context, fixing inconsistent code, and manually tracking what was implemented vs. what was planned

### Secondary Audiences
- **Solo developers / Indie hackers**: Building SaaS products and needing structured development practices
- **Agencies/consultancies**: Delivering client projects with consistent quality across engagements
- **Open-source maintainers**: Managing community contributions with AI assistance

## The Problem

**Development teams using AI coding assistants face four critical pain points:**

1. **Inconsistent Code Quality**: AI generates code that doesn't follow project standards, best practices, or architectural patterns - requiring extensive manual review and refactoring (wastes 5-10 hours/week)

2. **No Planning → Implementation Structure**: Jumping between planning documents, user stories, and AI chat without clear connection - losing context and implementation intent (wastes 3-5 hours/week)

3. **Manual Context Management**: Copy-pasting specs, architectural decisions, and coding standards into every AI conversation - repetitive and error-prone (wastes 2-4 hours/week)

4. **No Learning/Improvement Loop**: AI doesn't learn from past mistakes, project-specific patterns, or team preferences - repeating the same errors across features (cumulative quality debt)

**Total cost**: 10-19 hours/week per developer in a 5-person team = **50-95 hours/week wasted** on preventable coordination and quality issues.

## Differentiators

**What makes Specwright unique:**

1. **Only Framework with Complete Spec → Story → Execution Lifecycle**
   - Not just code generation - full workflow from product planning to delivery
   - Structured PO + Architect refinement pattern for feature specifications
   - Phase-based execution with built-in quality gates and self-review

2. **Self-Learning System**
   - Skills automatically update with lessons learned from each implementation
   - Domain knowledge builds up over project lifecycle
   - AI gets smarter about YOUR project over time (not generic patterns)

3. **Built Specifically for Claude Code**
   - Optimized for Claude Code's capabilities (tool use, context window, multi-step reasoning)
   - Not a generic wrapper - deeply integrated with Claude Code's agent architecture
   - 34 specialized commands, 13 utility agents, auto-loading skills based on file patterns

4. **100% Open-Source & Self-Hosted**
   - No SaaS dependency, no vendor lock-in, no external API costs
   - Complete control over workflows, templates, and standards
   - Community-driven development and extensibility

5. **Optional Visual UI**
   - Kanban board for project overview (specs, stories, status tracking)
   - Integrated chat interface for Claude Code communication
   - Workflow execution dashboard with live progress monitoring

## Key Features

### 1. Product Planning (`/plan-product`, `/plan-platform`)
**Guided workflows that create comprehensive product documentation:**
- Product Brief (vision, target audience, core features, success metrics)
- Tech Stack Decision (with rationale for each technology choice)
- Development Roadmap (phased plan with priorities and effort estimates)
- Architecture Decision Records (pattern selection based on complexity analysis)
- Boilerplate Structure (starter code matching chosen architecture)

**Value**: Eliminates "blank canvas" problem - provides structure from day one.

### 2. Feature Specification (`/create-spec`, `/add-story`, `/change-spec`)
**PO + Architect refinement pattern for detailed feature specs:**
- **PO Phase**: Gather functional requirements (user stories, acceptance criteria, edge cases)
- **Architect Phase**: Add technical refinement (WAS/WIE/WO/WER - data model, logic, API, authorization)
- **Output**: Testable user stories with complete context for autonomous implementation

**Value**: Specifications ARE the source of truth - no drift between planning and implementation.

### 3. Phase-Based Execution (`/execute-tasks`)
**Autonomous story implementation with quality control:**
- **Phase 1**: Kanban initialization, story dependency analysis
- **Phase 2**: Git strategy setup (worktree/branch)
- **Phase 3**: Story-by-story execution with auto-loaded skills
- **Phase 4**: Self-review against Definition of Done
- **Phase 5**: Commit, continue to next story

**Value**: AI works autonomously while maintaining quality - you review finished work, not micro-manage steps.

### 4. Self-Learning System (`/add-learning`, `/add-domain`)
**Continuous improvement through experience:**
- **Skills with DoS & Don'ts**: Automatically updated after each story with lessons learned
- **Domain Documentation**: Business logic and project-specific knowledge built up incrementally
- **Quality Gates**: Always-active skill ensuring consistency across all implementations

**Value**: AI quality improves with every feature delivered - compounding efficiency gains.

### 5. Optional Web UI (Kanban + Chat + Workflows)
**Visual project management for Specwright projects:**
- **Dashboard**: Kanban board showing specs and stories across status columns (ready → in_progress → done)
- **Chat**: Interactive chat interface for Claude Code - no terminal required
- **Workflows**: Execute and monitor Specwright workflows with live progress tracking

**Value**: Non-technical stakeholders can see project status, technical team can work visually or via CLI.

### 6. Market Validation Workflows (`/validate-market`)
**Built-in validation for product ideas:**
- Competitive analysis via Perplexity MCP integration
- Problem validation and market sizing
- Feature prioritization based on market research
- GO/NO-GO decision framework

**Value**: Validate before building - reduce risk of building the wrong thing.

### 7. Retroactive Documentation (`/retroactive-doc`, `/retroactive-spec`)
**Document existing codebases:**
- Analyze existing code to create specifications
- Generate user-facing documentation for completed features
- Bring legacy projects into Specwright structure

**Value**: Adopt Specwright incrementally - no need to start from scratch.

## Success Metrics

**6-Month Goals:**
- **100 active projects** using Specwright (tracked via GitHub stars + MCP telemetry)
- **10+ teams** contributing back (PRs, issues, documentation)
- **50 showcased projects** in public gallery (social proof)
- **Average quality improvement**: 30% reduction in bugs reported after adopting Specwright

**12-Month Vision:**
- **500 active projects** across solo devs, teams, agencies, OSS projects
- **Community ecosystem**: 3rd-party skills, templates, and workflow contributions
- **Integration ecosystem**: MCP servers for popular tools (Jira, Linear, Notion, GitHub Projects)

---

**Note:** This product brief serves as the foundation for all development decisions. Refer to this document when planning features, making architectural choices, or prioritizing work.
