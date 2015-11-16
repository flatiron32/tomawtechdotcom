---
title: Expected Developer Workflow
layout: page.hbt
---
Below is the expected workflow for all changes to most codebases. This includes changes all type of code, java, groovy, XML, CSS, UI templates, configuration files, etc.

# High-level

A change is not done until your team has received feedback from customers.

1.  Write Elegant and Clean Code
2.  ./gradlew check
3.  Commit to master
4.  Watch master ci job
5.  Start deployment pipeline
6.  For each environment (env)
    1.  observe env availability 
    2.  observe env metrics

# In Detail

## Prerequisites

### Knowledge

Before developing independently on any code base you must be proficient in the language being used, the testing framework, and the source control management (SCM) tool, such as git.

#### Where to start

Hands on experience is a valuable way to gain knowledge. Often this can be done through pairing with someone more knowledgable than you. Personal exploration is also a valuable way of learning, but you should check your design, tests, and solution with someone with more skill before proceeding through the workflow.

Google, Stackoverflow, and a local expert are the excellent sources for information to learn more about a language, testing framework, or SCM tool. Many companies and teams have Lead or Principal Engineers whose job is to facilitate learning.

### Setup

All changes must be made in an environment where the Initial Client Setup steps defined in Getting Started with git have been completed.

## Implementation

All changes should:

*   be small
*   be tested as low as possible
*   conform to existing style
*   fit into the existing architecture
*   not introduce common bugs
*   be production ready

### Small

A single change does not need to complete a story but should add some functionality to the system that is as independent from other commits as much as possible. Also you should only write as little code as is needed in order to complete your task. Remember the axiom that bugs are only found in lines of code. The fewer lines of code you write the fewer bugs you will create. Methodologies like Test Driven Development (TDD) should be employed to ensure you only write as much code as is needed to create the behaviour you are testing for.

#### A note on Bugs

Changes that squash a bug should include exactly two things and no more:

1.  A test at the lowest possible level of the [test pyramid](http://martinfowler.com/bliki/TestPyramid.html) that exposes the bug and no higher.
2.  The smallest change possible to make the new test pass without failing the existing test.

### Scalable

While designing and developing your code consider how it will scale. What are the expected number of machines this will execute on and expected number of concurrent transactions? What will happen if either of these values double, increase by 10x, or are cut in half? Will your solution behave well if the machines are cut in half but the transactions double? What about 100? Scalability and concurrency problems are hard. If you are unsure, check with your local lead or principal engineer.

### Tests

All logic and behaviour changes should have a test that protects the logic or behaviour from changing in the future without an explicit change to the tests. This test should be as low in the [test pyramid](http://martinfowler.com/bliki/TestPyramid.html) as possible with a strong bias toward unit tests. If you find you cannot write a unit test to cover a scenario, first attempt to refactor before writing a test higher in the [test pyramid](http://martinfowler.com/bliki/TestPyramid.html). Logic and behaviour only needs to be tested at one level of the [test pyramid](http://martinfowler.com/bliki/TestPyramid.html).

Avoid writing tests that merely exercise frameworks or languages. 100% line coverage is not the goal.

Tests must assert the desired behaviour and not the implementation. If the test is testing the implementation the API you are writing is likely poorly designed and should be corrected. Also exercising the code is not testing without an assert.


#### Bad: Does not have any assertions

<pre>
void testSomething() {
  Object result = instance.something();
}
</pre>

#### Also terrible and never do this

<pre>
void testSomething() {
  Object result = instance.something();
  assertNotNull(result)'
}
</pre>

#### Good: Asserts that the result has the expected data

<pre>
@Test
public void testSomething() {
    assertThat(instance.something(), is(expectedResult));
}
</pre>

#### A note on Bugs

Bugs must be exposed before writing code to squash the bug. For stories in general TDD is not mandated. However for bug fixes TDD is required to ensure you only write just enough code to fix the bug and write a test that prevents regression.

### Style

All codebases have a style. Often it is written down as a seperate document, but it always can be intuited from the existing code. Style is intended to be a constraint that frees you from thinking about how to structure the lines of your code. You should instruct your IDE to conform to the defined style. Checkstyle should be included in the pre-commit check for all commits.

If you are changing code that does not follow the defined style, refrain from updating the style while implementing your change. Keeping these changes separate will help with code reviews. Instead update the style of the classes you are changing first in a seperate pull-request. Then make your change using the correct style. Finally finish by investigating why checkstyle was not properly implemented for this codebase and correcting it.

### Architecture

There is a time to refactor parts of the system. Your change is not one of these times. Refactoring should happen often, but not as part of a change in logic or behaviour. The architecture of our applications should reinforce the [principles of Object Oriented Design](https://en.wikipedia.org/wiki/Object-oriented_design) (OOD), not fall for [the fallacies of distributed computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing), and conform to the [12 Factors](http://12factor.net/) of modern services.

### Documentation

The best code is self documenting. However all code tends to outlive the original developer and should have a reasonable amount of documentation to assist new developers to naturally discover how the code works.

### Bugs

All code has bugs. Perfect is not your goal. However there are known patterns that can be detected through static analysis of the code. Be aware of the outstanding technical debt for the codebase as determined by Sonar. You should not introduce any new violations and if changing code with existing violations you should resolve violations reasonably within your scope. Follow the Boy Scouts motto to leave the code better than you found it.

### Production Ready

Don't let perfect be the enemy of the good. If your change is small, has tests, conforms to both style and architecture, has no known bugs, moves you closer to delivering value business wants, and you will not shit your pants if it is in production, it is production ready.

A timeline cannot make code production ready. If code does not meet our organization's definition of production ready, all product owners will appreciate the open feedback and work with product to set expectations. It is your responsibility to set expectations with product owners as soon as possible. You should set realistic estimations in sprint planning that include refactoring and making safe risky and untested code.

## Pre-Commit to Master

All changes should be checked before being pushed to master.

### Check 

`./gradlew check` should be run for all changes locally before pushing the change off of your machine.

### Commit Comments

All commits should have comments in English that clearly state what value this changes added to the application. Ideally you write the commit comment before implementation to hold your change to a single purpose. Also the comment should describe the new behavior or capability of the system not what you did. Try to think of your commit message as a bullet point in a feature list. It's not about you, it's about the system.

If your change is related to a JIRA issue, this issue number should be the first part of the commit message followed by ": " and then your plain English message. For instance, "JIRA-1234: Users can enter credit card number on payment details page."

### Peer Review

A Pull Request should be created for each change and the change reviewed by a peer. The description of the Pull Request should tell the reviewer how to read the code, what has changed, and why the change was done this way. Pull requests that cannot be reviewed in 10 minutes should be declined.  

The goals of a peer review are to:

*   spread knowledge about your great change
*   humbly receive feedback about how your change should be improved

A peer review is not:

*   a design review, this should be done before implementation
*   a time to show off, be a teacher not a jerk
*   a check for perfection, don't let the perfect be the enemy of the good

The best peer reviews are completed with both the implementer and reviewer pair programming to integrate any changes needed and the code merged to master.

## Post-Commit

All codebases should have Continuous Integration (CI) jobs configured to build each change to the canonical master branch and at least inform the committer when it fails. You should be aware of this job before merging your change and responsibly monitor this job to ensure that you change does not break the build. This means you should not push changes you will be unable to observe in CI, such as before you go home or get on a plane.

### Broken Build

People make mistakes and builds break. When you have broken the build you should acknowledge this to the development community for the codebase and fix the issue promptly. If rolling forward is as much effort as rolling back it may be acceptable to roll forward. The scenarios include times such as when you forgot to add a file to your commit. However the bias should be toward reverting your commit and fixing it without blocking the rest of the codebase's development community. 

The expectation for the rest of the community is for the first person to be blocked or annoyed by a broken build to acknowledge it and revert it. This is not a judgement on the code, but part of a healthy community building a strong codebase. 

## Pre-Deployment

You are responsible for your change being deployed to production. Once you have a passing CI job and are prepared to deploy the application to production you should begin the deployment pipeline and observe it. If any anomaly is observed it should be assessed if it can proceed to the next environment, if it can remain in that environment, and if it should be patched or rolled back. The bias is toward rolling back and possibly reverting the change.

### Deploying other changes

If there are undeployed changes in master and you are prepared to deploy your change, you should feel free to deploy this change as a precondition to master is production-readiness. Assume any undeployed changes are trivial and do not require special observation.

### Waiting to deploy

If you are not ready to deploy a change, do not merge it to master. Because branching is discouraged, reevaluate if this change cannot be pushed to master behind a switch or with some refactoring. 

## Post-Deployment

Observe your change in production and let your Production Specialist and Team know of any impact that should be fed back into your planning.

### Issues

#### During post-deployment observation

If an issue is found during observation, rollback the application and fix the master branch so as to not block other changes. The fixing of master can be either a reversion of changes or additional updates to corrected the problem(s).

#### After post-deployment observation

Assess if an application rollback will solve the problem(s). If so, rollback, and correct the master branch; adding verification steps (automated or manual) to exercise the observed problem(s) in the application. If a rollback will not solve the problem, add additional tests to the verification steps, fix the problem, and initiate a deployment.

# Notes

## Definitions

### Code

Code in this context includes any file you are changing in a code base that has an effect on the running application or the scripting of its lifecycle. This includes class files, scripts, markup, CSS, configuration, etc. When in doubt, it is code.

### Observe

Observe does not mean watch every waking moment. It means be aware of what is happening and drop all other tasks and take action when demanded. You cannot observe two changes at one time.

What is observed will vary based on the change. The change should define how it will be observed. If an application does not have automated verification, observation of the application health graphana dashboard is required.