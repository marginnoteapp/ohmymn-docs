import contributors from "../contributors.json"

export interface Contributor {
  name: string
  avatar: string
}

export interface CoreTeam {
  avatar: string
  name: string
  github: string
  forum?: string
  bbs?: string
  description: string
}

const contributorsAvatars: Record<string, string> = {}

const getAvatarUrl = (name: string) =>
  import.meta.hot
    ? `https://github.com/${name}.png`
    : `/user-avatars/${name}.png`

const contributorList = (contributors as string[]).reduce((acc, name) => {
  contributorsAvatars[name] = getAvatarUrl(name)
  acc.push({ name, avatar: contributorsAvatars[name] })
  return acc
}, [] as Contributor[])

const coreTeamMembers: CoreTeam[] = [
  {
    avatar: contributorsAvatars.ourongxing,
    name: "ourongxing",
    github: "ourongxing",
    bbs: "ourongxing",
    forum: "ourongxing",
    description: "MarginNote 团队成员"
  },
  {
    avatar: contributorsAvatars.BryanHuang66,
    name: "Exodus!",
    github: "BryanHuang66",
    bbs: "bryan",
    forum: "bryan",
    description: "MarginNote 团队成员"
  }
]

export { coreTeamMembers, contributorList as contributors }
