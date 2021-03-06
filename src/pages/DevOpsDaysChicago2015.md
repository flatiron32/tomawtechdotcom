---
title: Notes from DevOps Days Chicago 2015
layout: page.hbt
---
# Presentation Notes

## Day 1

### Keynote 1: State of DevOps fro John WIllis

There are a lot of books to look into that appear to be amazing, especially around complexity. Investigate Generative Organizations and Westrum Model. High performers are getting better at success and recovery. If you deliver 30x a low performer in 2013 you were 3x their success and 48x the recovery. In 2014 it was 60x success and 140x recovery! Need to get DevOps Enterprise on my radar.

This was a good presentation with a lot of passion. A survey of where DevOps is and what is upcoming with a full list of further reading material.

Topics to investigate:

*   Get slides and process book.
*   Data Gravity
*   Generative Organization
*   Westrum Model

### Talk 1: Microservices at Orbitz by Steve Hoffman

I know most of this stuff as a principal implementer; light notes. Our old way had a "backlog of backlash".

### Talk 2: Bootstrapping an ops team by Charity Majors

The first question is "Do you really need an ops team?" Many teams do not need a team. If you are a small DevOps team you do not need a team, but someone who cares about infrastructure on their team. However once all the team is working on is infrastructure they _might_ need an operations team. Operations engineering is not "software engineering lite". It is a skill that needs to be brought into your team when needed and you have hard problems. It is likely that you need your dev teams to learn more about operations. You need to have "hard" problems to have the best operations teams. Facebook only builds problem to scale to 10x because they assume there will be a rewrite before that. If you do not you will make too many poor decisions. When hiring someone you are likely to want a unicorn, but you don't et a unicorn. Instead determine what the traits (not skills) that you need in people and hire for that. Things that do not predicts a good operations engineer:

*   Great at white-boarding code
*   Any particular technology or language
*   Any particular pedigree
*   Big company pedigree

I would say this is true for software engineers also. Success at a big company does not predict success at a small company. Learned helplessness is kryptonite for a startup. Prefer recommendations over an interview.

This talk was too much "operations" is separate from

Topics to investigate:

*   Do we have hard problems that necessitate an ops team?
*   Book: The hard thing about hard things
*   Do we praise people for the behaviour we want? And never praise harmful behaviour.

### Talk 3: Brainstorming Failure by Jeff Smith from Grubhub

Absence of errors is not feedback. Crossfunctional teams are essential to ensure the right type of feedback is being generated that is focused on the end-user. Process:

1.  Brainstorm all the potential failures
2.  List out the effects of the failures
3.  Agree on Risk Level Scales
4.  Assign Severity Ranking
5.  Assign liklihood
6.  Assign Detection Ranking
7.  _This is an incomplete list. Look at presentation_

Calculate your RPN

He is a great speaker.

Topics to investigate:

*   FMEA: Failure Mode Effects Analysis
*   Tool: Doc that helps calculate RPN
*   Go Teams should calculate RPN
*   It would be interesting to use this for the WL development process.

### Ignites

#### Some definitions, Clinton Wolfe

Great talk. Learns about goats. Implment CoffeOps groups and ChatOps

#### HomeOps

Started doing one load of laundry a day. Was able to lower carrying inventory. What is Glodratt? Laundry Compared to delivery process. Have empathey on CTOs.

#### Parental Advisory, Alina Machenzie

Talk in public so more people are learning and correcting. Don't let Stratavari in your organization to keep the information alone. Ask lots of questions. It is important to share what you know and don't know. Check out Apprenticeship Patterns

#### QA in DevOps, Alejandro Remierez

QA is in

#### What DevOps is, Leon Fayer

A rant on what DevOps is. DevOps is not a thing, it is not a product, you cannot buy it.

## Day 2

### Talk 1: Continuous Delivery from Dan Piessens

Use Feature Toggles. Remember that toggles are technical debt. I liked the talk, it is basically what I would have said on the topic.

Topics to investigate:

### Talk 2: Frameworks for Feedback from Rebecca Miller-Webster

Build relationships. Talk about behaviors and not people. Talk about facts, and behaviors including the resulted impact to you. Providing a recommendation would be helpful. Receive feedback well is also important. Be empathetic and have curiosity for other people. Remember this is also a skill to be learned and strengthened. Talk about actions without commentary. Non-violent communication: Facts, Feelings, Needs, Requests.

Topics to investigate:

### Talk 3: The DevOps Pipeline from Steve Pereira

Intro on Lean Value stream mapping to allow you to see end to end the value of a process. Tests can be used to assure quality in a pipeline when deficiencies are found. Automation can make this free after startup cost. You can also automate configuration and previsioning. Always measure things. RTFM: REMOVE The Fucking Manual Engineer backwards: Value Stream Map the future, form delta, and then backlog emerges.

Topics to investigate:

### Talk 4: Day of the Donkey from Coté

Business are craving IT that does not suck. They want to be like Uber etc. Existing businesses are motivated by the fear of being Uberred. They want to uber themselves. 75% of companies say they are not doing agile well. Fewer people see IT as helping business. Their culture if messed up, how do we help? Know your equestrian metaphor. Are you a unicorn, war stallion, or a donkey? Most are donkey. "The donkey is real people with real problems." Tech works, but culture/meatware problems persist. Most folks are failing because of non-technical reasons. You mostly need to be a software company and have a culture that focuses on what their design. Coté says it is good to conflate DevOps and CD. (I disagree.) For a lot of donkey's IT is like Eor's tail. Management needs to be the Dungeon Master to set direction.

Topics to investigate:

*   Is our business ready for us to deliver instantaneously?
*   Re-read Continuous Delivery
*   Talk to product managers about what they need technology to do.
*   Leading The Transformation

### Ignites

#### Contribute to Open Source, Trevor Hess

Anything you find valuable should be open source. This is a primer on contributing to open source.

#### CI Pipelines, Surya Gaddipati

Talk about Orbitz CI Pipeline + Source Control of Jobs. Uses kevernetes and not mesos.

#### Chef Tips, Tom Duffield

Use ChefDF Windows Chef Workstation ServerSpec Helper Files Use MixLib::ShellOut Record While You Learn: Record your screen Pre-baked VMs or Containers Troubleshoot with Pry Use run_state to store data Coarse everything instead of checking for nil Pimp My Text Editor

#### Monitor Last, Darin Froze

Even when you are building the thing, how do you know it is doing the thing if you are not monitoring the thing?

#### Why are you here?, Mike Stahnki

Do people have a passion to learn? If you are hiring learning people you will have happy people when they are doing new things and learning. You can learn through trolling. Chef has a bad idea Monday every week.

# Interesting Sponsors:

*   10th Magnitude