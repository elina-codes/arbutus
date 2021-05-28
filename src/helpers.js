/* eslint-disable no-unused-expressions */
import { kebabCase } from "lodash"

export const toKebab = string => kebabCase(string)

export const renderPageContentAndMenu = contentObj => {
  const menuSections = []
  const pageSections = []

  contentObj?.sections?.forEach(section => {
    let sectionId = null
    if (section.menuItem) {
      sectionId = toKebab(section[section.menuItem])
      menuSections.push({
        title: section[section.menuItem],
        target: sectionId,
      })
    }
    pageSections.push({
      id: sectionId,
      ...section,
    })
  })

  return {
    menuSections,
    pageSections,
  }
}
