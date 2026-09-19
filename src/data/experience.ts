export type Role = {
  org: string
  title: string
  when: string
  where: string
  points: string[]
}

export const roles: Role[] = [
  {
    org: 'Freddie Mac',
    title: 'Software Engineer II',
    when: 'Jul 2023 — now',
    where: 'McLean, VA',
    points: [
      'Apigee gateway: mainframe monolith → AWS microservices. $2M+ annual savings.',
      'Spring Boot virtualization on Kubernetes. Test data: hours → minutes. 90% automation, a quarter early.',
      'Shared GraphQL/Kafka Java library. App onboarding: 2 weeks → 3 days.',
      'REST → WebSockets + WebFlux. 300k+ events/hour.',
    ],
  },
  {
    org: 'Freddie Mac',
    title: 'Software Engineer I',
    when: 'Jul 2022 — Jul 2023',
    where: 'McLean, VA',
    points: [
      'Spring Boot microservices on Kubernetes. Insurance claims and billing. $100M+ annual recoveries.',
      'PostgreSQL scripts recovered $200k from pipeline failures.',
      '99.99% uptime. JUnit, Cucumber, Kibana, Kiali.',
    ],
  },
  {
    org: 'UKG',
    title: 'Software Engineer Intern',
    when: 'Sep 2021 — Nov 2021',
    where: 'Remote',
    points: [
      'MuleSoft + DataWeave. 40% less manual formatting.',
      'Won a 48-hour React/Firebase hackathon.',
    ],
  },
  {
    org: 'Penn State',
    title: 'Head TA, Computer Engineering',
    when: 'Jan 2020 — May 2021',
    where: 'State College, PA',
    points: ['Labs and office hours for 380+ students. Grader script cut totaling time 80%.'],
  },
  {
    org: 'Jitsik',
    title: 'Software Engineer Intern',
    when: 'Jun 2019 — Aug 2019',
    where: 'Philadelphia, PA',
    points: ['Unity/C# VR driver training. +15% frame rate.'],
  },
]
