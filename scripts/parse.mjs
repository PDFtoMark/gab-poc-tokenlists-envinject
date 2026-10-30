export const extractFieldValues = (body, fieldNames) => {
  return fieldNames.reduce((acc, f) => {
    const r = new RegExp(String.raw`${f}\s+(.*?)(\s+###|$)`, 'si')
    return { ...acc, [f.toLowerCase()]: body.match(r)?.[1].trim() }
  }, {})
}
export const processRequest = async (context, core) => {
  const body = context.payload.issue.body
  const fieldNames = process.env.FIELD_NAMES.split(',')
  const values = extractFieldValues(body, fieldNames)
  values.address &&= values.address.toLowerCase()
  core.setOutput('issueInfo', JSON.stringify(values))
  core.setOutput('address', values.address)
}
